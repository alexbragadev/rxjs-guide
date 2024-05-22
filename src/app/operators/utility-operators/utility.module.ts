import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilityComponent } from './utility.component';
import { TapComponent } from './tap/tap.component';
import { DelayComponent } from './delay/delay.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';
import { TimeoutComponent } from './timeout/timeout.component';



@NgModule({
  declarations: [
    UtilityComponent,
    TapComponent,
    DelayComponent,
    TimestampComponent,
    TimeIntervalComponent,
    TimeoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    UtilityComponent
  ]
})
export class UtilityModule { }
