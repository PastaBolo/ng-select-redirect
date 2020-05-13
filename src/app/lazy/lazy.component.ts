import { Component, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const getParentsSegments = (route: ActivatedRoute) =>
  route.parent ? getParentsSegments(route.parent).concat(route.parent.snapshot.url.map(({ path }) => path)) : []

const getChildrenSegments = (route: ActivatedRoute) =>
  route.firstChild ? route.firstChild.snapshot.url.map(({ path }) => path).concat(getChildrenSegments(route.firstChild)) : []


@Component({
  selector: 'app-lazy',
  template: `
    <button (click)="goToUser(1)">User 1</button>
    <button (click)="goToUser(2)">User 2</button>
    <router-outlet></router-outlet>
  `
})
export class LazyComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToUser(id: number) {
    this.router.navigate([
      ...getParentsSegments(this.route),
      id,
      ...getChildrenSegments(this.route).slice(1)
    ]);
  }
}
