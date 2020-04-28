import { Injectable } from '@angular/core';

@Injectable()
export class NavigationConfigService {
  items

  constructor() {
  }

}

export const NAVCONFIG: NavigationConfigService = {
  items: {
    'about': 'About us',
    'service': 'Service',
    'product': 'Product',
    'contact': 'Contact',
  }

}
