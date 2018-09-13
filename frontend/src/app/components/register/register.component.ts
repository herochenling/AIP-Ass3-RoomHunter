import { Component, OnInit, Input } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() username: String;
  @Input() email: String;
  @Input() password: String;
  msgType: String;
  message: String;
  failed: Boolean = true;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router) { }

  /**
   * Validate input by using validate service;
   * Register a user and add it to database by using auth service.
   */
  onRegisterSubmit() {
    // create a user object by using input data.
    const user = {
      email: this.email,
      username: this.username,
      password: this.password
    }

    // check requrired input fields
    if (!this.validateService.validateRegister(user)) {
      this.message = "Please fill in all fields!";
      this.showMessage(this.message, false);
      return false;
    }

    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.message = "Please enter an valid email!";
      this.showMessage(this.message, false);
      return false;
    }

    //register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.message = "You are registered and you can login now!";
        this.showMessage(this.message, true);
        this.failed = false;
        setTimeout(() => { this.router.navigate(['/login']); }, 3000);
      } else {
        this.message = "Somethng went wrong!";
        this.showMessage(this.message, false);
        this.router.navigate(['/register']);
      }
    });
  }

  /** 
   * Flush message shows error or sucess message
   */
  showMessage(msg, isSuccess) {
    if (isSuccess) {
      this.msgType = "success";
    } else {
      this.msgType = "danger";
    }
    this.ngFlashMessageService.showFlashMessage({
      messages: [msg],
      dismissible: true,
      timeout: 5000, //5 sec
      type: this.msgType.toString()
    });
  }

  ngOnInit() {
  }

}
