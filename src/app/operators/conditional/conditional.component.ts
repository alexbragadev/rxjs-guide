import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'conditional',
  template: 
  `<ul>
        <li>
            <a routerLink="find">Find</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class ConditionalComponent implements OnInit {

  ngOnInit() {
    
  }

}

