import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavTopComponent } from './mobile-nav-top.component';

describe('MobileNavTopComponent', () => {
  let component: MobileNavTopComponent;
  let fixture: ComponentFixture<MobileNavTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
