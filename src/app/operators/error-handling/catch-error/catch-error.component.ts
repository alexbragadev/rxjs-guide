import { Component, OnInit } from '@angular/core';
import { of, map, catchError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe({
        next: x => console.log(x),
        error: err => console.log(err)
      });
  }

}
