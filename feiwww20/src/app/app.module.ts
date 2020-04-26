import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//app modules imports
import { NavigationModule } from './navigation/navigation.module';
import { AppContentModule } from './app-content/app-content.module'
import { AppRoutingModule } from './app-routing.module';
//local imports
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    AppContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
