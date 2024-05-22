import { Component, OnInit } from '@angular/core';
import { interval, timeInterval } from 'rxjs';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.css']
})
export class TimeIntervalComponent implements OnInit {
  ngOnInit(): void {

    const seconds = interval(1000);

    seconds
      .pipe(timeInterval())
      .subscribe(value => console.log(value));

    // NOTE: The values will never be this precise,
    // intervals created with `interval` or `setInterval`
    // are non-deterministic.

    // { value: 0, interval: 1000 }
    // { value: 1, interval: 1000 }
    // { value: 2, interval: 1000 }
  }

}
