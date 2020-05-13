import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div>
      <a routerLink="friends">friends</a>
      <span> - </span>
      <a routerLink="interests">interests</a>
    </div>
    <router-outlet></router-outlet>
  `
})
export class ProfileComponent { }
