import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fweb-mobile-nav-top',
  templateUrl: './mobile-nav-top.component.html',
  styleUrls: ['./mobile-nav-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileNavTopComponent implements OnInit {
  show: Boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
  }

  toggleMenu(e:any) {
    e.stopPropagation();
    e.preventDefault();
    this.show = !this.show;
  }

}
