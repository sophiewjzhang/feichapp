import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fweb-chinese-word-board',
  templateUrl: './chinese-word-board.component.html',
  styleUrls: ['./chinese-word-board.component.scss']
})
export class ChineseWordBoardComponent implements OnInit {

  numScreenShots = [
    '/assets/chwb1/chwb_screen_portraint55_0.png', 
    '/assets/chwb1/chwb_screen_portraint55_1.png', 
    '/assets/chwb1/chwb_screen_portraint55_2.png', 
    '/assets/chwb1/chwb_screen_portraint55_3.png', 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
