import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fweb-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
