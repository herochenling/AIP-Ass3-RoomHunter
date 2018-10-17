import { Component, OnInit, NgZone } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FlashMessageService } from '../../services/flash-message.service';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})

/** 
 * This class is responsible for creating a new post and save it to the database
 */
export class CreatePostComponent implements OnInit {
    title: String;
    street: String;
    suburb: String;
    city: String;
    state: String;
    postCode: String;
    roomType: String;
    contactName: String;
    phone: String;
    rent: String;
    byUser: String;
    postDate: String;
    description: String;
    files: File[];
    houseImage: String;
    imageSrc: String;
    addr: object;
    postForm: FormGroup;
    submitted = false;
    fileUploaded = false;

    /** 
     * Method to be invoked everytime we receive a new instance
     * of the address object from the onSelect event emitter.
     */
    setAddress(addrObj) {
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(() => {
            this.addr = addrObj;
            this.street = (addrObj as any).street_number;
            this.suburb = (addrObj as any).route;
            this.city = (addrObj as any).locality;
            this.state = (addrObj as any).locality;
            this.postCode = (addrObj as any).postal_code;
            if (this.postCode != null && this.postCode != undefined) {
                this.postForm.controls.postCode.setValue(this.postCode);
            }
            console.log(this.addr);
            if (this.city == null || this.city == undefined) {
                this.city = (addrObj as any).formatted_address;
            }
        });
    }

    constructor(
        private authService: AuthService, private uploadService: UploadService,
        private postService: PostService, private flashMessageService: FlashMessageService,
        private router: Router, private zone: NgZone, private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        // stop if user is not logged in
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return;
        }

        let user = this.authService.loadUser();
        let userInfo = JSON.parse(user);
        this.byUser = userInfo.username;
        const nowDate = new Date();
        this.postDate = nowDate.toLocaleDateString();
        this.houseImage = '';

        // form validation
        this.postForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
            roomType: ['', Validators.required],
            rent: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
            address: ['', Validators.required],
            postCode: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+.*$/)]],
            description: ['', [Validators.required, Validators.maxLength(1000)]],
            contactName: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,10}$/)]],
            file: [null, Validators.required]
        });
    }

    /** 
     * convenience getter for easy access to form fields
     */
    get f() {
        return this.postForm.controls;
    }

    onCreatedSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.postForm.invalid) {
            return;
        }
        this.title = this.postForm.controls.title.value;
        this.roomType = this.postForm.controls.roomType.value;
        this.rent = this.postForm.controls.rent.value;
        this.description = this.postForm.controls.description.value;
        this.contactName = this.postForm.controls.contactName.value;
        this.phone = this.postForm.controls.phone.value;
        this.houseImage = this.uploadService.getHouseImage();

        //create post
        this.postService.createPost(
            this.title, this.street, this.suburb, this.city, this.state,
            this.postCode, this.roomType, this.contactName, this.phone,
            this.rent, this.byUser, this.postDate, this.description, this.houseImage)
            .subscribe(data => {
                if ((data as any).success) {
                    this.flashMessageService.showMessage(
                        (data as any).msg,
                        true
                    );
                    this.router.navigate(['/']); //to home page
                } else {
                    this.flashMessageService.showMessage(
                        (data as any).msg,
                        false
                    );
                    this.router.navigate(['/add']); //stay at the same page
                }
            });
    }

    /**
     * Back to home page
     */
    onCreatedCancel() {
        this.router.navigate(['/']);
    }

    /** 
     * set file info and read file local src info
     */
    public setFile(files) {
        this.files = files;
        if (files && files[0]) {
            var reader = new FileReader();
            reader.onload = (event: ProgressEvent) => { this.imageSrc = (<FileReader>event.target).result; };
            reader.readAsDataURL(files[0]);
        }
    }

    /*
     * upload room image
     */
    public uploadFile() {
        const formData: FormData = new FormData();
        console.log(this.files);
        for (let i = 0; i < this.files.length; i++) {
            formData.append('file', this.files[i]);
        }
        //upload
        this.uploadService.uploadFile(formData).subscribe(data => {
            if (data != undefined || data != null) {
                this.fileUploaded = true;
                this.uploadService.addHouseImage((data as any).data);
                this.flashMessageService.showMessage((data as any).msg, true);
            } else {
                this.fileUploaded = false;
                this.flashMessageService.showMessage((data as any).msg, false);
            }
        });
    }
}
