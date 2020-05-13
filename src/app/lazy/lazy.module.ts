import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { InterestsComponent } from './interests/interests.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [LazyComponent, ProfileComponent, FriendsComponent, InterestsComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LazyComponent, children: [
          {
            path: '', component: LayoutComponent, children: [
              {
                path: '', children: [
                  {
                    path: ':id', component: ProfileComponent, children: [
                      { path: 'friends', component: FriendsComponent },
                      { path: 'interests', component: InterestsComponent }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ])
  ]
})
export class LazyModule { }
