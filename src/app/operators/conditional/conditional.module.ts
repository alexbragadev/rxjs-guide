import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConditionalComponent } from './conditional.component';
import { FindComponent } from './find/find.component';



@NgModule({
  declarations: [
    ConditionalComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    ConditionalComponent
  ]
})
export class ConditionalModule { }
