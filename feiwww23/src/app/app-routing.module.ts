import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NavigationModule } from './navigation/navigation.module';
//local imports
import { NotFoundComponent } from './not-found/not-found.component';
import { AppContentComponent } from './app-content/app-content.component';
import { LandingComponent } from './app-content/landing//landing.component';
import { AboutComponent } from './app-content/about/about.component';
import { ServiceComponent } from './app-content/service/service.component';
import { ContactComponent } from './app-content/contact/contact.component';
import { ProductSummaryComponent } from './app-content/products/product-summary/product-summary.component';
import { ChineseWordBoardComponent } from './app-content/products/chinese-word-board/chinese-word-board.component';

const appRoutes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./app-content/app-content.module').then(m => m.AppContentModule)
  },
  /*
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  */
  //{ path: '',   redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    ),
    NavigationModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
