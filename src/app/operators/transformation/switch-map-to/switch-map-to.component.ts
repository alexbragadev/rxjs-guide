import { Component, OnInit } from '@angular/core';
import { fromEvent, switchMapTo, interval } from 'rxjs';

@Component({
  selector: 'app-switch-map-to',
  templateUrl: './switch-map-to.component.html',
  styleUrls: ['./switch-map-to.component.css']
})
export class SwitchMapToComponent implements OnInit {
  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMapTo(interval(1000)));
    result.subscribe(x => console.log(x));
  }

}
