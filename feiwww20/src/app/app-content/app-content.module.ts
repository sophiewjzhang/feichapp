import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//local imports
import { NavigationModule } from '../navigation/navigation.module';
import { AppContentRoutingModule} from './app-content-routing.module';

import { AppContentComponent } from './app-content.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule ,
    AppContentRoutingModule,
  ],
  declarations: [
    AppContentComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent,
  ],
  exports: [
    AppContentComponent,
    AboutComponent,
    ServiceComponent,
    ProductComponent,
    ContactComponent,
  ],
})
export class AppContentModule { }
