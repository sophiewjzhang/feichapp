import { TestBed, inject } from '@angular/core/testing';

import { NavigationConfigService } from './navigation-config.service';

describe('NavigationConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationConfigService]
    });
  });

  it('should be created', inject([NavigationConfigService], (service: NavigationConfigService) => {
    expect(service).toBeTruthy();
  }));
});
