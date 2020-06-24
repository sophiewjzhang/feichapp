import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseWordBoardComponent } from './chinese-word-board.component';

describe('ChineseWordBoardComponent', () => {
  let component: ChineseWordBoardComponent;
  let fixture: ComponentFixture<ChineseWordBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseWordBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseWordBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
