import { Component, OnInit } from '@angular/core';
import { interval, mergeMap, throwError, of, retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  ngOnInit(): void {
 
    const source = interval(1000);
    const result = source.pipe(
      mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
      retry(2) // retry 2 times on error
    );
    
    result.subscribe({
      next: value => console.log(value),
      error: err => console.log(`${ err }: Retried 2 times then quit!`)
    });
  }

}
