import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

const routes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  { path: "posts/:id", component: PostDetailComponent },
  { path: "posts", component: PostsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "posts/add", component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
