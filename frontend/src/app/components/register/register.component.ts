import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessageService } from "../../services/flash-message.service";


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
  failed: Boolean = true;

  constructor(
    private authService: AuthService,
    private flashMessageService: FlashMessageService,
    private router: Router) { }

  /**
   * Register a user and add it to database by using auth service.
   */
  onRegisterSubmit() {
    // create a user object by using input data.
    const user = {
      email: this.email,
      username: this.username,
      password: this.password
    }

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

  ngOnInit() {
  }

}
