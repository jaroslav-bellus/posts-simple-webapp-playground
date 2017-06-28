import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <my-posts></my-posts>
  `
})
export class AppComponent { name = 'My Posts'; }
