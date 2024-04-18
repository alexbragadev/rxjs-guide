import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { FilteringComponent } from './filtering.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { TakeComponent } from './take/take.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { TakeUntilComponent } from './take-until/take-until.component';

@NgModule({
  declarations: [
    FilterComponent,
    FilteringComponent,
    DebounceTimeComponent,
    TakeComponent,
    DistinctUntilChangedComponent,
    TakeUntilComponent
  ],
  imports: [
    CommonModule,
    RouterModule    
  ],
  exports: [
    FilterComponent,
    FilteringComponent
  ]
})
export class FilteringModule { }
