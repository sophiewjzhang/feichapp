import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//app modules imports
import { AppRootRoutingModule } from './app-root-routing.module';
import{ AppRoutesModule } from './app-routes/app-routes.module'; 
import { NavigationModule } from './navigation/navigation.module';
import { AppContentModule } from './app-content/app-content.module'
//local imports
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //AppFooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRootRoutingModule,
    AppRoutesModule,
    NavigationModule,
    AppContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
