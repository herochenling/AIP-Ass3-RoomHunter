import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})

/** This class is responsible for  displaying the details of selected post */
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  /** Retrieve post id from clicked url and then get the target post  */
  getPost(): void {
    const id = this.route.snapshot.paramMap.get("id"); //get post id from url
    this.postService.getPostById(id).subscribe((res: Post) => {
      this.post = res;
    });
  }

  ngOnInit() {
    this.getPost();
  }

  /** back to previous page */
  goBack(): void {
    this.location.back();
  }
}
