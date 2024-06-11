import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    const numbers = interval(1000);
 
    const takeFourNumbers = numbers.pipe(take(4));
    
    takeFourNumbers.subscribe(x => console.log('Next: ', x));
  }

}
