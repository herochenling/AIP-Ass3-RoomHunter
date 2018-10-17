import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  houseImage = '';
  //url = "http://213.159.202.247:4000";
  url = 'http://localhost:4000';
  httpOptions = {
    headers: new HttpHeaders({})
  };

  constructor(private http: HttpClient) {}

  //upload file
  uploadFile(formData) {
    return this.http.post(
      `${this.url}/posts/upload`,
      formData,
      this.httpOptions
    );
  }

  addHouseImage(images) {
    this.houseImage = images;
  }

  getHouseImage() {
    return this.houseImage;
  }
}
