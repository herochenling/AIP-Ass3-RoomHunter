import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})

export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

}
