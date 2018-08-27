import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { POSTS } from "../mock-posts";
import { Post } from "../post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private location: Location) {}

  /**Get the post by room-id from URL */
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get("id")
    this.post = POSTS.find(post => post.id === id);
  }

  ngOnInit() {
    this.getPost();
  }

  /**Back to pervious page */
  goBack(): void {
    this.location.back();
  }
}
