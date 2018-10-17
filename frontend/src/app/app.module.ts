import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FilterComponent } from './components/filter/filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { FlashMessageService } from './services/flash-message.service';
import { MessageService } from './services/message.service';

import { AuthGuard } from './guard/auth.guard';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        PostDetailComponent,
        LoginComponent,
        RegisterComponent,
        CreatePostComponent,
        FilterComponent,
        NavbarComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgFlashMessagesModule.forRoot(),
        HttpModule,
        SharedModule,
        ReactiveFormsModule
    ],
    providers: [
        PostService,
        AuthService,
        FlashMessageService,
        AuthGuard,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
