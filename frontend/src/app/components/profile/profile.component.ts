import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [AuthService, PostService]
})

/**
 * Lists user info and their created posts
 */
export class ProfileComponent implements OnInit {
    user: Object;
    homeList: any;

    public pages: any = [];
    constructor(private authService: AuthService, private postService: PostService, private router: Router) { }

    ngOnInit() {
        this.authService.getProfile().subscribe(
            profile => {
                this.user = (profile as any).user;
                this.loadList();
            },
            err => {
                return false;
            }
        );
    }

    /* 
     * load user created posts
     */
    loadList() {
        const user = this.user as any;
        const username = user.username;
        this.postService.getPostByUser(username).subscribe(data => {
            if (data != undefined) {
                this.homeList = data;
            }
        });
    }

    /*
     * delete post 
     */
    delHouse(item) {
        this.postService.deletePost(item._id).subscribe(data => {
            if (data != undefined) {
                this.loadList();
            }
        });
    }

    /*
     * show post detail
     */
    showDetail(item) {
        this.router.navigateByUrl('/posts/' + item._id);
    }
}
