import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { AppRoutingModule } from ".//app-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CreatePostComponent } from "./create-post/create-post.component";

import { PostService } from "./post.service";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostComponent,
    FilterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
