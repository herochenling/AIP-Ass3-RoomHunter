import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { AppRoutingModule } from ".//app-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

import { PostService } from "./services/post.service";
import { FilterComponent } from './components/filter/filter.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

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
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
