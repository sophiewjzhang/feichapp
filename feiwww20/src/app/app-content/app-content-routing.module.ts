import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//local imports
//import { NavigationModule } from '../navigation/navigation.module';
//import { AppFooterComponent } from '../app-footer/app-footer.component';
import { NavigationModule } from '../navigation/navigation.module';
import { AppContentComponent } from './app-content.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';

import {  NavigationConfigService } from '../navigation/navigation-config.service';

/* const navServer = new NavigationConfigService();

navServer.setItem('about', 'About us');
navServer.setItem('service', 'Service');
navServer.setItem('product', 'Product');
navServer.setItem('contact', 'Contact');
console.log(navServer.getitemKeys()) */

let contentRoutes: Routes = [
  {
    path: '',
    component: AppContentComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
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
    NavigationModule ,
  ],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
