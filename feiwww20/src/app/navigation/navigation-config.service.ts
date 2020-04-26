import { Injectable } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

export class NavItem {
  name: String;
  label: String;
  constructor( n, l) {
    this.name = n;
    this.label = l;
  }
}

// @Injectable( )
@Injectable({
  providedIn: 'root',
})

export class NavigationConfigService {
  _instance: NavigationConfigService;
  //_items = new Set();
  _items = new Map();
  _navItems: NavItem[] = [];


  constructor() { 
    this.setItem('about', 'About us');
    this.setItem('service', 'Service');
    this.setItem('product', 'Product');
    this.setItem('contact', 'Contact');
  }

  /*
  static getInstance(): NavigationConfigService {
    if( !this._instance) {
      this._instance= this.constructor();
    }
    return this._instance;
  }
  */

  getItems(): any {
    return this._items;
  }

  setItem(  n, val ) {
    this._items.set( n, val);
  }

  getitemKeys( ) {
    return this._items.keys();
  }

}
