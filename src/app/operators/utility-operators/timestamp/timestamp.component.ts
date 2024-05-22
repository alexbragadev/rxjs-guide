import { Component, OnInit } from '@angular/core';
import { fromEvent, timestamp } from 'rxjs';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css'],
})
export class TimestampComponent implements OnInit {
  ngOnInit(): void {
    const clickWithTimestamp = fromEvent(document, 'click').pipe(timestamp());

    // Emits data of type { value: PointerEvent, timestamp: number }
    clickWithTimestamp.subscribe((data) => {
      console.log(data);
    });
  }
}
