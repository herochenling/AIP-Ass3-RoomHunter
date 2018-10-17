import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authToken: any;
    user: any;
    url = 'http://localhost:4000';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    /**
     * register user in the backend and send back response message
     */
    registerUser(user) {
        return this.http.post(
            `${this.url}/users/register`,
            user,
            this.httpOptions
        );
    }

    /**
     * Authenticate user: if success, return user info and tokens otherwise return false
     */
    authenticateUser(user) {
        return this.http.post(
            `${this.url}/users/authenticate`,
            user,
            this.httpOptions
        );
    }

    /*
   * check user auth
   */
    checkAuth() {
        this.loadUser();
        if (this.user != null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get user profile
     */
    getProfile() {
        this.loadToken();
        let headers = new HttpHeaders({
            Authorization: this.authToken,
            'Content-Type': 'application/json'
        });
        return this.http.get(`${this.url}/users/profile`, { headers: headers });
    }

    /**
     * Store token and user info in the local storage
     */
    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    /**
     * Load token from local storage into class member authToken.
     */
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    /**
     * Load user from local storage
     */
    loadUser() {
        this.user = localStorage.getItem('user');
        return this.user;
    }

    /**
     * Logout, clear all stored data
     */
    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    /**
     * Check if the token exists
     */
    isLoggedIn() {
        if (localStorage.id_token == undefined) {
            return false;
        } else {
            const helper = new JwtHelperService();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    }
}
