import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transform',
  template: 
  `<ul>
        <li>
            <a routerLink="switchMap">SwitchMap</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class transformComponent implements OnInit {

  ngOnInit() {
    
  }

}