import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    const array = [10, 20, 30];
    const result = from(array);

    result.subscribe(x => console.log(x));
  }

}
