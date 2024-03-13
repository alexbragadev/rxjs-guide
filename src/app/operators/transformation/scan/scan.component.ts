import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit{
  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5]);

    source.pipe(
      scan((acc, value) => acc + value, 0)
    ).subscribe(result => console.log(result));

    // Output: 1, 3, 6, 10, 15
  }

}
