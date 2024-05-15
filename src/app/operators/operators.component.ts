import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'transform',
  template: 
  `<ul>
        <li>
            <a [routerLink]="['/transform']">Transformation Operators</a>
        </li>
        <li>
            <a [routerLink]="['/filtering']">Filtering Operators</a>
        </li>
        <li>
            <a [routerLink]="['/joinCreation']">Join Creation</a>
        </li>
        <li>
            <a [routerLink]="['/errorHandling']">Error Handling</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class operatorComponent implements OnInit {

  ngOnInit() {
    
  }

}