import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() username: String;
  @Input() email: String;
  @Input() password: String;

  onRegisterSubmit() {
    const user = {
      email: this.email,
      username: this.username,
      password: this.password
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
