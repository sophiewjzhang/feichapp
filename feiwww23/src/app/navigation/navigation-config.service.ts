import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationConfigService {
  items:any
  constructor() {
  }

}

export const NAVCONFIG: NavigationConfigService = {
  items: {
    'about': 'About us',
    'service': 'Service',
    'products': 'Product',
    'contact': 'Contact',
  }

}
