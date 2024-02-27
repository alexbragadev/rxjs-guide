import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transform',
  template: 
  `<ul>
        <li>
            <a routerLink="switchMap">SwitchMap</a>
        </li>
        <li>
            <a routerLink="switchMapTo">SwitchMapTo</a>
        </li>
        <li>
            <a routerLink="switchScan">SwitchScan</a>
        </li>
        <li>
            <a routerLink="map">Map</a>
        </li>
        <li>
            <a routerLink="concatMap">ConcatMap</a>
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

