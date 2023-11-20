import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'feiwww23';

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
   // this.route.navigate([`/products/ChineseWordBoard`]);
  }
}
