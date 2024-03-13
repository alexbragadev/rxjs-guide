import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { transformComponent } from './transformation/transformation.component';
import { SwitchMapComponent } from '../operators/transformation/switch-map/switch-map.component';

import { OperatosRoutingModule } from './operatos-routing.module';
import { RouterModule } from '@angular/router';
import { operatorComponent } from './operators.component';
import { SwitchMapToComponent } from './transformation/switch-map-to/switch-map-to.component';
import { SwitchScanComponent } from './transformation/switch-scan/switch-scan.component';
import { MapComponent } from './transformation/map/map.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';
import { PluckComponent } from './transformation/pluck/pluck.component';
import { ScanComponent } from './transformation/scan/scan.component';

@NgModule({
  declarations: [
    transformComponent,
    operatorComponent,
    SwitchMapComponent,
    SwitchMapToComponent,
    SwitchScanComponent,
    MapComponent,
    ConcatMapComponent,
    PluckComponent,
    ScanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OperatosRoutingModule
  ]
})
export class OperatorsModule { }
