import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessageService } from '../../services/flash-message.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

/**
 * Navgation bar: allows user to navigate between pages and handle logout action
 */
export class NavbarComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private flashMessageService: FlashMessageService,
        private router: Router
    ) { }

    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(['/']);
        this.flashMessageService.showMessage('You are logged out!', true);
    }

    ngOnInit() { }
}
