import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessageService } from '../../services/flash-message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

/**
 * Allows to register a new user
 */
export class RegisterComponent implements OnInit {
    @Input()
    username: String;
    @Input()
    email: String;
    @Input()
    password: String;
    msgType: String;
    failed: Boolean = true;
    registerForm: FormGroup;
    submitted = false;

    constructor(
        private authService: AuthService, private flashMessageService: FlashMessageService,
        private formBuilder: FormBuilder, private router: Router) {
        // form validation
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(emailRegex)]],
            password: ['', Validators.required]
        });
    }

    /**
     * convenience getter for easy access to form fields
     */
    get f() {
        return this.registerForm.controls;
    }

    /**
     * Register a user and add it to database by using auth service.
     */
    onRegisterSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) return;
        // create a user object by using input data.
        const user = {
            email: this.registerForm.controls.email.value,
            username: this.registerForm.controls.username.value,
            password: this.registerForm.controls.password.value
        };

        //register user
        this.authService.registerUser(user).subscribe(data => {
            if ((data as any).success) {
                this.flashMessageService.showMessage((data as any).msg, true);
                this.failed = false;
                setTimeout(() => { this.router.navigate(['/login']); }, 3000);
            } else {
                this.flashMessageService.showMessage((data as any).msg, false);
                this.router.navigate(['/register']);
            }
        });
    }

    ngOnInit() { }
}
