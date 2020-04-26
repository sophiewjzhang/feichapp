import { Component, OnInit } from '@angular/core';

import {  NavigationConfigService } from '../navigation-config.service';

@Component({
  selector: 'fweb-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss']
})
export class NavBarTopComponent implements OnInit {
  navItems;
  itemSet: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  map = new Map([['about', 'About us'], ['service', 'Service']]);
  private navConfig: NavigationConfigService;

  constructor() {
    this.navConfig = new NavigationConfigService();
    this.navConfig.setItem('about', 'About us');
    this.navConfig.setItem('service', 'Service');
    this.navConfig.setItem('product', 'Product');
    this.navConfig.setItem('contact', 'Contact');
    this.navItems = this.navConfig.getItems();
    console.log('nav bar-----');
    console.log( JSON.stringify(this.navItems));

    //this.itemSet = this.navConfig.getItems();
   }

  ngOnInit() {
  }

}
