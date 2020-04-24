import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//app modules imports
import { NavigationModule } from './navigation/navigation.module';
//local imports
import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
