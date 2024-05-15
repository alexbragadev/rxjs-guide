import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { joinCreationComponent } from './joinCreation.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';



@NgModule({
  declarations: [
    joinCreationComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeComponent
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    joinCreationComponent
  ]
})
export class JoinCreationModule { }
