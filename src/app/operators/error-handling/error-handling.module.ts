import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling.component';
import { RouterModule } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { RetryComponent } from './retry/retry.component';



@NgModule({
  declarations: [
    ErrorHandlingComponent,
    CatchErrorComponent,
    RetryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ErrorHandlingComponent
  ]
})
export class ErrorHandlingModule { }
