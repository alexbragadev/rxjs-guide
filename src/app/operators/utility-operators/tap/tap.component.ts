import { Component, OnInit } from '@angular/core';
import { of, tap, map } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  ngOnInit(): void {
    of(Math.random())
      .pipe(
        tap(console.log),
        map((n) => (n > 0.5 ? 'big' : 'small'))
      )
      .subscribe(console.log);
  }
}
