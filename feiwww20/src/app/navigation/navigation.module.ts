import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//local imports
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';

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
  ]
})
export class NavigationModule { }
