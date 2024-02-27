import { Component, OnInit } from '@angular/core';
import { of, switchScan } from 'rxjs';

@Component({
  selector: 'app-switch-scan',
  templateUrl: './switch-scan.component.html',
  styleUrls: ['./switch-scan.component.css']
})
export class SwitchScanComponent implements OnInit {
  ngOnInit(): void {
    of(1,2,3,4).pipe(
      switchScan((acc, curr) => of(acc + curr), 0)
    ).subscribe(console.log);
  }

}
