import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mathematical',
  template: 
  `<ul>
        <li>
            <a routerLink="count">Count</a>
        </li>
        <li>
            <a routerLink="max">Max</a>
        </li>
        <li>
            <a routerLink="min">Min</a>
        </li>
        <li>
            <a routerLink="reduce">Reduce</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class MathematicalComponent implements OnInit {

  ngOnInit() {
    
  }

}

