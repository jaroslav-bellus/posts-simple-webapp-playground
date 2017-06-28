import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';

import { PostsService } from "./services/PostsService";
import { PostsComponent } from "./components/posts.component";
import { PostComponent } from "./components/post.component";

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent, 
    PostsComponent, 
    PostComponent
  ],
  providers: [
    PostsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
