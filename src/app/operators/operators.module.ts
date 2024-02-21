import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { transformComponent } from './transformation/transformation.component';
import { SwitchMapComponent } from '../operators/transformation/switch-map/switch-map.component';

import { OperatosRoutingModule } from './operatos-routing.module';
import { RouterModule } from '@angular/router';
import { operatorComponent } from './operators.component';

@NgModule({
  declarations: [
    SwitchMapComponent,
    transformComponent,
    operatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OperatosRoutingModule
  ]
})
export class OperatorsModule { }
