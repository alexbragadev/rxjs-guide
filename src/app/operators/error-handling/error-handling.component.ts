import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'errorHandling',
  template: 
  `<ul>
        <li>
            <a routerLink="catchError">CatchError</a>
        </li>
        <li>
            <a routerLink="retry">Retry</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class ErrorHandlingComponent implements OnInit {

  ngOnInit() {
    
  }

}

