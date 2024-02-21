import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  ngOnInit() {
    const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => console.log(x));
  }

}