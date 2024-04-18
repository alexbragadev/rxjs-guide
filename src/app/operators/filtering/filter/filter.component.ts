import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  ngOnInit() {
    const source = from([1, 2, 3, 4, 5]);

    source.pipe(
      filter(value => value % 2 === 0)
    ).subscribe(result => console.log(result));
  
  }

}
