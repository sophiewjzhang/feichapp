import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

//local imports
import { AppContentRoutingModule} from './app-content-routing.module';
import { AppContentComponent } from './app-content.component';
import { LandingComponent } from './landing//landing.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

import { ProductSummaryComponent } from './products/product-summary/product-summary.component';
import { ChineseWordBoardComponent } from './products/chinese-word-board/chinese-word-board.component';

@NgModule({
  imports: [
    CommonModule,
    AppContentRoutingModule,
  ],
  declarations: [
    AppContentComponent,
    LandingComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProductSummaryComponent,
    ChineseWordBoardComponent,
  ],
  exports: [
    AppContentComponent,
    LandingComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProductSummaryComponent,
    ChineseWordBoardComponent,
  ],
})
export class AppContentModule { }
