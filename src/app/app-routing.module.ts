import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { EagerComponent } from './eager.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', children: [
          {
            path: 'eager', component: EagerComponent, children: [
              {
                path: 'test/lazy',
                loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
