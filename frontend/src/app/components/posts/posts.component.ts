import { Component, OnInit } from "@angular/core";
import { Post } from "../../post";
import { PostService } from "../../post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})

/** This class is responsible for retrieve and list all the posts  */
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.fetchPosts();
  }

  // get all the posts from server by uisng post service
  fetchPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

}
