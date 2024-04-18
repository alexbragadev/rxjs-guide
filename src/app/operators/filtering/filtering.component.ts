import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtering',
  template: 
  `<ul>
        <li>
            <a routerLink="filter">Filter</a>
        </li>
        <li>
            <a routerLink="debouceTime">DebouceTime</a>
        </li>
        <li>
            <a routerLink="take">Take</a>
        </li>
        <li>
            <a routerLink="distinctUntilChanged">DistinctUntilChanged</a>
        </li>
        <li>
            <a routerLink="takeUntil">TakeUntil</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class FilteringComponent implements OnInit {

  ngOnInit() {
    
  }

}

