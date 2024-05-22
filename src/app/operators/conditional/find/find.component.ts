import { Component, OnInit } from '@angular/core';
import { fromEvent, find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
})
export class FindComponent implements OnInit {
  ngOnInit(): void {
    let list1 = of(11, 22, 33, 44, 55, 66, 77, 88, 99);  
    let final_val = list1.pipe(find(x => x % 2 === 0),);  
    final_val.subscribe(x => console.log(x));  
  }
}
