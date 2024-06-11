import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathematicalComponent } from './mathematical.component';
import { RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { MaxComponent } from './max/max.component';
import { MinComponent } from './min/min.component';
import { ReduceComponent } from './reduce/reduce.component';



@NgModule({
  declarations: [
    MathematicalComponent,
    CountComponent,
    MaxComponent,
    MinComponent,
    ReduceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MathematicalComponent
  ]
})
export class MathematicalModule { }
