import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/** Service for getting posts from the server */
export class PostService {
  //base url of the server
  //url = "http://213.159.202.247:4000";
  url = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  //get all posts
  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }

  //get post by id
  getPostById(id) {
    return this.http.get(`${this.url}/posts/${id}`);
  }

  //create post
  createPost(
    title,
    street,
    suburb,
    city,
    state,
    postCode,
    roomType,
    contactName,
    phone,
    rent,
    byUser,
    postDate,
    description,
    houseImage
  ) {
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
      description: description,
      houseImage: houseImage
    };
    // adding a new post by sending a post request
    return this.http.post(`${this.url}/posts/add`, post);
  }

  //delete post by id
  deletePost(id) {
    return this.http.get(`${this.url}/delete/${id}`);
  }

  //searcg post by user name
  getPostByUser(username) {
    return this.http.get(`${this.url}/posts/user/${username}`);
  }

  /*
   * search post by area
   */
  searchPostByArea(city) {
    if (city == null || city == undefined || city.length == 0) city = 'all';
    return this.http.get(`${this.url}/posts/search/city/${city}`);
  }

  /*
  * search post by price
  */
  searchPostByPrice(price) {
    console.log(price);
    const price_begin = parseFloat(price[0]),
      price_end = parseFloat(price[price.length - 1]);
    let price_low = 0,
      price_high = 10000;
    if (price_begin == 1) {
      price_low = 99;
    } else if (price_begin == 2) {
      price_low = 200;
    } else if (price_begin == 3) {
      price_low = 300;
    } else if (price_begin == 4) {
      price_low = 400;
    }
    if (price_end == 0) {
      price_high = 99;
    } else if (price_end == 1) {
      price_high = 200;
    } else if (price_end == 2) {
      price_high = 300;
    } else if (price_end == 3) {
      price_high = 400;
    } else if (price_end == 4) {
      price_high = 10000;
    }
    console.log(price_low);
    console.log(price_high);
    return this.http.get(
      `${this.url}/posts/search/price/${price_low}/${price_high}`
    );
  }
}
