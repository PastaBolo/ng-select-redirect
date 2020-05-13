import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div>
      <a routerLink=""><h1>My App</h1></a>
      <a routerLink="eager/test/lazy">click here</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class MainComponent { }
