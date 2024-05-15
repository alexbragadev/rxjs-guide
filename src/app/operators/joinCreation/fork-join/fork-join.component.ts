import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit{
  ngOnInit(): void {

    const source1 = of('Hello');
    const source2 = of('World');

    forkJoin([source1, source2]).subscribe(results => {
      console.log(results[0] + ' ' + results[1]);
    });

    // Output: Hello World
  }

}
