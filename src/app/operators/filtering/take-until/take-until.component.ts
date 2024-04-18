import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit{

  ngOnInit() {
    const source = interval(1000);
    const stopper = timer(5000);

    source.pipe(
      takeUntil(stopper)
    ).subscribe(result => console.log(result));

    // Output: 0, 1, 2, 3, 4
  }

}
