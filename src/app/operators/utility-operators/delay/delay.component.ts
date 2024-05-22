import { Component, OnInit } from '@angular/core';
import { fromEvent, delay } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css'],
})
export class DelayComponent implements OnInit {
  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
    delayedClicks.subscribe(x => console.log(x));
  }
}
