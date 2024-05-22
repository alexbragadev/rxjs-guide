import { interval, timeout, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css'],
})
export class TimeoutComponent implements OnInit {
  ngOnInit(): void {
    class CustomTimeoutError extends Error {
      constructor() {
        super('It was too slow');
        this.name = 'CustomTimeoutError';
      }
    }

    const slow$ = interval(900);

    slow$
      .pipe(
        timeout({
          each: 1000,
          with: () => throwError(() => new CustomTimeoutError()),
        })
      )
      .subscribe({
        error: console.error,
      });
  }
}
