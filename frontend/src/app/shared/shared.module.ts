import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GooglePlacesDirective } from './google_places/google-places.directive';

@NgModule({
    declarations: [GooglePlacesDirective],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    exports: [GooglePlacesDirective]
})
export class SharedModule { }
