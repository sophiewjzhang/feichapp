import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//local imports
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing//landing.component';

const routes: Routes = [
  {
    path: 'content',
    loadChildren: () => import('./app-content/app-content.module').then(m => m.AppContentModule)
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
