import { OnInit, Component } from '@angular/core';
import { PostsService } from "../services/PostsService";
import { Post } from "../model/Post";

@Component({
    selector: 'my-posts',
    templateUrl: './../html/posts.component.html',
    styleUrls: ['./../css/posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    filteredPosts: Post[] = [];
        
    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.getPosts()
            .then(data => {
                this.posts = data;
                this.filteredPosts = data;
            });
    }

    filter(textFilter: string) {
        console.log('filter', textFilter);
        this.filteredPosts = this.posts
            .filter(x => ~x.body.indexOf(textFilter));
    }
}