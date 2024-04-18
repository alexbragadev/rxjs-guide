import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit{

  ngOnInit() {
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(15));
    takeFive.subscribe(x => console.log(x));
  }

}
