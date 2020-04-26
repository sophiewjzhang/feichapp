import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//local imports
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'content',
   loadChildren: () => import('./app-content/app-content.module').then(m => m.AppContentModule)
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
