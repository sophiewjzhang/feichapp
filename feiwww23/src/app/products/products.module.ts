import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//local imports
import { AppContentRoutingModule } from './products-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { ChineseWordBoardComponent } from './chinese-word-board/chinese-word-board.component';

@NgModule({
  declarations: [
    ProductSummaryComponent,
    ChineseWordBoardComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    AppContentRoutingModule,
  ]
})
export class ProductsModule { }
