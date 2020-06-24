import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//local imports
import { NavigationModule } from '../navigation/navigation.module';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { ChineseWordBoardComponent } from './chinese-word-board/chinese-word-board.component';

let productsRoutes: Routes = [
  {
    path: '',
    component: ProductSummaryComponent,
    children: [
      {
        path: 'ChineseWordBoard',
        component: ChineseWordBoardComponent,
      },
    ]
  }];


@NgModule({
  imports: [
    RouterModule.forChild(productsRoutes),
    NavigationModule,
  ],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
