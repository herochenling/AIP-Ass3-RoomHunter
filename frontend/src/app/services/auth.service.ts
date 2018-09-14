import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  url = "http://localhost:4000";

  //headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  //{ headers: this.headers }

  constructor(private http: HttpClient) { }

  /** 
   * register user in the backend and send back response message 
   */
  registerUser(user) {
    return this.http.post(`${this.url}/users/register`, user, this.httpOptions);
  }

  /**
   * Authenticate user: if success, return user info and tokens otherwise return false
   */
  authenticateUser(user) {
    return this.http.post(`${this.url}/users/authenticate`, user, this.httpOptions);
  }

  /**
   * Get user profile
   */
  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders({
      'Authorization': this.authToken,
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
