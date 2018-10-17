import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessageService } from '../../services/flash-message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

/**
 * handle login action and form validation for username and password
 */
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    constructor(private authService: AuthService, private router: Router,
        private formBuilder: FormBuilder, private flashMessageService: FlashMessageService) {

        this.loginForm = this.formBuilder.group({
            username:
                ['', Validators.required], password: ['', Validators.required]
        });
    }

    /*
     * convenience getter for easy access to form fields
     */
    get f() {
        return this.loginForm.controls;
    }

    /**
     * check password and username is valid or not. If valid naviagte to profile page.
     * If not valid, stay on the same page.
     */
    onLoginSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const user = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        //check if user name and password are valid
        this.authService.authenticateUser(user).subscribe(data => {
            if ((data as any).success) {
                this.authService.storeUserData((data as any).token, (data as any).user);
                this.flashMessageService.showMessage((data as any).msg, true);
                this.router.navigate(['/profile']);
            } else {
                this.flashMessageService.showMessage((data as any).msg, false);
                this.router.navigate(['/login']);
            }
        });
    }

    ngOnInit() { }
}
