import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//local imports
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavigationConfigService, NAVCONFIG } from './navigation-config.service';
import { MobileNavTopComponent } from './mobile-nav-top/mobile-nav-top.component';
import { DesktopNavTopComponent } from './desktop-nav-top/desktop-nav-top.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarTopComponent,
    NavFooterComponent,
    MobileNavTopComponent,
    DesktopNavTopComponent,
    NavItemsComponent,
    NavLogoComponent,
  ],
  exports: [
    NavBarTopComponent,
    NavFooterComponent,
    MobileNavTopComponent,
    DesktopNavTopComponent,
    NavItemsComponent,
    NavLogoComponent,
  ],
  providers: [
    {
      provide: NavigationConfigService,
      useValue: NAVCONFIG,
    }
  ]
})
export class NavigationModule { }
