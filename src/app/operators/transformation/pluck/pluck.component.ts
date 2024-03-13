import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit{
  ngOnInit(): void {
    const source = from([
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 35 }
    ]);

    source.pipe(
      pluck('name')
    ).subscribe(result => console.log(result));
    
    // Output: John, Alice, Bob
  }

}
