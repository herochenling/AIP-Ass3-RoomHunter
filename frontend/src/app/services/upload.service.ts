import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

/**
 * The class provide service for image uploading
 */
export class UploadService {
    houseImage = '';
    url = 'http://localhost:4000';
    httpOptions = { headers: new HttpHeaders({}) };

    constructor(private http: HttpClient) { }

    /**
     * upload file
     */
    uploadFile(formData) {
        return this.http.post(`${this.url}/posts/upload`, formData, this.httpOptions);
    }

    addHouseImage(images) {
        this.houseImage = images;
    }

    getHouseImage() {
        return this.houseImage;
    }
}
