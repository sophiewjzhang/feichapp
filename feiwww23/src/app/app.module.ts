import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router } from '@angular/router';

//local imports
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppContentModule } from './app-content/app-content.module';

//App root components
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    NavigationModule,
    AppContentModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AppFooterComponent,
    NotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
