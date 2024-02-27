import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwitchMapComponent } from '../operators/transformation/switch-map/switch-map.component';
import { transformComponent } from './transformation/transformation.component';
import { SwitchMapToComponent } from './transformation/switch-map-to/switch-map-to.component';
import { SwitchScanComponent } from './transformation/switch-scan/switch-scan.component';
import { MapComponent } from './transformation/map/map.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';

const operatorsRoutes: Routes = [
  { path: 'transform',  component: transformComponent
    // children: [{path: 'switchMap', component: SwitchMapComponent}]
  },
  { path: 'transform/switchMap',  component: SwitchMapComponent},
  { path: 'transform/switchMapTo',  component: SwitchMapToComponent},
  { path: 'transform/switchScan',  component: SwitchScanComponent},
  { path: 'transform/map',  component: MapComponent},
  { path: 'transform/concatMap',  component: ConcatMapComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(operatorsRoutes)
  ], exports: [
    RouterModule
  ]
})
export class OperatosRoutingModule { }
