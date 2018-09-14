import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessageService } from '../../services/flash-message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessageService) { }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

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

  ngOnInit() {
  }

}
