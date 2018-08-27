import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostsComponent } from "./posts/posts.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CreatePostComponent } from "./create-post/create-post.component";

const routes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "detail/:id", component: PostDetailComponent },
  { path: "posts", component: PostsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "postroom", component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
