import { Component, OnInit } from '@angular/core';
import { range, count } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  ngOnInit(): void {
    const numbers = range(1, 7);
    const result = numbers.pipe(count(i => i % 2 === 1));
    result.subscribe(x => console.log(x));
  }

}
