import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  ngOnInit(): void {

    const source = of(1, 2, 3);

    source.pipe(
    startWith(0)
    ).subscribe(result => console.log(result));

    // Output: 0, 1, 2, 3
  }

}
