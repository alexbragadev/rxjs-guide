import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})
export class DistinctUntilChangedComponent implements OnInit{

  ngOnInit() {
    const source = from([1, 1, 2, 2, 3, 3, 3, 4, 5, 2, 2, 1, 7]);

    source.pipe(
    distinctUntilChanged()
    ).subscribe(result => console.log(result));

    //output 1,2,3,4,5,2,1,7
  }

}