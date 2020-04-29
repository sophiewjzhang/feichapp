import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fweb-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavLogoComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  goHome(e) {
    e.preventDefault();
    this.route.navigate([`/home`]);
  }

}
