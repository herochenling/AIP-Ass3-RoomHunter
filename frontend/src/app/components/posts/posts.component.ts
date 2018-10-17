import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { DeliveryService } from '../../services/delivery.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    encapsulation: ViewEncapsulation.None
})

/** 
 * This class is responsible for retrieve and list all the posts
 */
export class PostsComponent implements OnInit, OnDestroy {
    posts: Post[];
    posts_: Post[];
    subscription: Subscription; //the filter results from the message service

    constructor(private postService: PostService, private DeliveryService: DeliveryService) {
        //subscribe to message service, search result in filter component will send to this component
        this.subscription = this.DeliveryService.getMessage().subscribe(message => {
            let msg = (message as any).text;
            this.posts = (msg as any).list;
            this.trimPost();
        });
    }

    ngOnInit() {
        this.fetchPosts();
    }

    /** 
     * destroy subscription
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /** 
     * check post empty, if post empty, page will show tip
     */
    bValid() {
        if (this.posts == null || this.posts.length == 0) return false;
        else return true;
    }

    /**
     * get all the posts from server by using post service
     */
    fetchPosts() {
        this.postService.getPosts().subscribe((data: Post[]) => {
            this.posts = data;
            this.trimPost();
        });
    }

    /** 
     * trim roomImage url in posts
     */
    trimPost() {
        for (var i = 0; i < this.posts.length; ++i) {
            this.posts[i].houseImage = this.posts[i].houseImage.replace(/\"/g, '');
        }
    }
}
