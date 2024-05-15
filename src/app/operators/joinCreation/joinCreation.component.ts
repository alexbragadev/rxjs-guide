import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joinCreation',
  template: 
  `<ul>
        <li>
            <a routerLink="concat">Concat</a>
        </li>
        <li>
            <a routerLink="forkJoin">ForkJoin</a>
        </li>
        <li>
            <a routerLink="merge">Merge</a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
  styles: []
})
export class joinCreationComponent implements OnInit {

  ngOnInit() {
    
  }

}

