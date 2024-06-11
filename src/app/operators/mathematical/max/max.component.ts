import { Component, OnInit } from '@angular/core';
import { of, max } from 'rxjs';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {
  ngOnInit(): void {

    of(
      { age: 7, name: 'Foo' },
      { age: 5, name: 'Bar' },
      { age: 9, name: 'Beer' }
    ).pipe(
      max((a, b) => a.age < b.age ? -1 : 1)
    )
    .subscribe(x => console.log(x.name));

    // Outputs
    // 'Beer'
  }

}
