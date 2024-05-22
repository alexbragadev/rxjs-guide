import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creation',
  template: 
  `<ul>
        <li>
            <a routerLink="of">Of</a>
        </li>
        <li>
            <a routerLink="ajax">Ajax</a>
        </li>
        <li>
            <a routerLink="defer">Defer</a>
        </li>
        <li>
            <a routerLink="from">From</a>
        </li>
        <li>
            <a routerLink="interval">Interval</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class CreationComponent implements OnInit {

  ngOnInit() {
    
  }

}

