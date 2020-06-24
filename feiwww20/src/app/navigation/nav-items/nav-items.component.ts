import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationConfigService } from '../navigation-config.service';

@Component({
  selector: 'fweb-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss']
})
export class NavItemsComponent implements OnInit {

  navItems;
  constructor(
    private navConfig: NavigationConfigService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.navItems = this.navConfig.items;
  }

  onItem(e, navLink) {
    e.preventDefault();
    this.route.navigate([`${navLink}`]);
  }

}
