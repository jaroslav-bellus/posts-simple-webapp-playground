import { OnInit, Component, Input } from '@angular/core';
import { Post } from "../model/Post";

@Component({
    selector: 'my-post',
    templateUrl: './../html/post.component.html',
    styleUrls: ['./../css/post.component.css']
})
export class PostComponent {    
    @Input() post: Post;
}