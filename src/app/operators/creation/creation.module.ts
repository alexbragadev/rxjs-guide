import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreationComponent } from './creation.component';
import { OfComponent } from './of/of.component';
import { AjaxComponent } from './ajax/ajax.component';
import { DeferComponent } from './defer/defer.component';
import { FromComponent } from './from/from.component';
import { IntervalComponent } from './interval/interval.component';



@NgModule({
  declarations: [
    CreationComponent,
    OfComponent,
    AjaxComponent,
    DeferComponent,
    FromComponent,
    IntervalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    CreationComponent
  ]
})
export class CreationModule { }
