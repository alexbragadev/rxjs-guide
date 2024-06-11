import { Component, OnInit } from '@angular/core';
import { defer, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent implements OnInit{
  ngOnInit(): void {
    const clicksOrInterval = defer(() => {
      return Math.random() > 0.5
        ? fromEvent(document, 'click')
        : interval(1000);
    });
    clicksOrInterval.subscribe(x => console.log(x));
  }

}
