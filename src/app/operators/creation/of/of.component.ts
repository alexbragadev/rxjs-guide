import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5).subscribe((result) => console.log(result));

    // Output: 1, 2, 3, 4, 5
  }
}
