import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {  NavigationConfigService } from '../navigation-config.service';

@Component({
  selector: 'fweb-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarTopComponent implements OnInit {
  navItems;
  itemSet: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  map = new Map([['about', 'About us'], ['service', 'Service']]);

  constructor(private navConfig: NavigationConfigService) {
    this.navItems = this.navConfig.items;
   }

  ngOnInit() {
  }

}
