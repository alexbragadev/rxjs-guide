import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'utility',
  template: 
  `<ul>
        <li>
            <a routerLink="tap">Tap</a>
        </li>
        <li>
            <a routerLink="delay">Delay</a>
        </li>
        <li>
            <a routerLink="timestamp">Timestamp</a>
        </li>
        <li>
            <a routerLink="timeInterval">TimeInterval</a>
        </li>
        <li>
            <a routerLink="timeout">Timeout</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class UtilityComponent implements OnInit {

  ngOnInit() {
    
  }

}

