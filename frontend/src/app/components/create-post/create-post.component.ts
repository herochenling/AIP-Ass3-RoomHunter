import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from "@angular/router";
import { FlashMessageService } from "../../services/flash-message.service";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

/** This class is responsible for creating a new post and save it to the database */
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

  constructor(
    private postService: PostService,
    private flashMessageService: FlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.byUser = "user";
    this.postDate = "21/09/2018";
  }


  onCreatedSubmit() {
    this.postService.createPost(
      this.title, this.street, this.suburb, this.city, this.state,
      this.postCode, this.roomType, this.contactName, this.phone,
      this.rent, this.byUser, this.postDate, this.description).subscribe(data => {
        if ((data as any).success) {
          this.flashMessageService.showMessage((data as any).msg, true);
          this.router.navigate(['/']);
        } else {
          this.flashMessageService.showMessage((data as any).msg, false);
          this.router.navigate(['/add']);
        }
      })

  }

  onCreatedCancel() {
    this.router.navigate(['/']);
  }

}
