import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fweb-chinese-word-board',
  templateUrl: './chinese-word-board.component.html',
  styleUrls: ['./chinese-word-board.component.scss']
})
export class ChineseWordBoardComponent implements OnInit {

  numScreenShots = [
    '/assets/chwb1/chwb_screen_portraint55_0.jpg', 
    '/assets/chwb1/chwb_screen_portraint55_1.jpg', 
    '/assets/chwb1/chwb_screen_portraint55_2.jpg', 
    '/assets/chwb1/chwb_screen_portraint55_3.jpg', 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
