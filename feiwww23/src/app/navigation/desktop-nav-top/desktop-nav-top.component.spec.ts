import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNavTopComponent } from './desktop-nav-top.component';

describe('DesktopNavTopComponent', () => {
  let component: DesktopNavTopComponent;
  let fixture: ComponentFixture<DesktopNavTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopNavTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
