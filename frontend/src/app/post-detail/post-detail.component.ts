import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

//import { POSTS } from "../mock-posts";
import { Post } from "../post";
import { PostService } from "../post.service";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  //post: Post;
  post: Post;
  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.postService.getPostById(id).subscribe((res: Post) => {
      this.post = res;
    });

  }

  ngOnInit() {
    this.getPost();
  }

  goBack(): void {
    this.location.back();
  }
}
