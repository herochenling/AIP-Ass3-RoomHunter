import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

/** Service for getting posts from the server */
export class PostService {

  //base url of the server
  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.uri}/posts`);
  }

  getPostById(id) {
    return this.http.get(`${this.uri}/posts/${id}`);
  }

  createPost(title, street, suburb, city, state, postCode, roomType, contactName,
    phone, rent, byUser, postDate, description) {
    const post = {
      title: title,
      street: street,
      suburb: suburb,
      city: city,
      state: state,
      postCode: postCode,
      roomType: roomType,
      contactName: contactName,
      phone: phone,
      rent: rent,
      byUser: byUser,
      postDate: postDate,
      description: description
    };
    // adding a new post by sending a post request
    return this.http.post(`${this.uri}/posts/add`, post);
  }

  deletePost(id) {
    return this.http.get(`${this.uri}/posts/delete/${id}`);
  }
}
