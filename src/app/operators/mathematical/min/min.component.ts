import { Component, OnInit } from '@angular/core';
import { of, min } from 'rxjs';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.css']
})
export class MinComponent implements OnInit {
  ngOnInit(): void {

    of(5, 4, 7, 2, 8)
      .pipe(min())
      .subscribe(x => console.log(x));

    // Outputs
    // 2
  }

}
