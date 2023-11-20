import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//local imports
import { AppContentComponent } from './app-content.component';
import { LandingComponent } from './landing//landing.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ChineseWordBoardComponent } from './products/chinese-word-board/chinese-word-board.component';

let contentRoutes: Routes = [
  {
    path: '',
    component: AppContentComponent,
    children: [
      {
        path: '',
        component: ChineseWordBoardComponent,
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'products',
        component: ChineseWordBoardComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  }];


@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes),
  ],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
