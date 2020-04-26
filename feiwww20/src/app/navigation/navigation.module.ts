import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//local imports
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavigationConfigService } from './navigation-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarTopComponent,
    NavFooterComponent,
  ],
  exports: [
    NavBarTopComponent,
    NavFooterComponent,
  ],
  providers: [NavigationConfigService]
})
export class NavigationModule { }
