import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SwitchMapComponent } from '../operators/transformation/switch-map/switch-map.component';
import { transformComponent } from './transformation/transformation.component';
import { SwitchMapToComponent } from './transformation/switch-map-to/switch-map-to.component';
import { SwitchScanComponent } from './transformation/switch-scan/switch-scan.component';
import { MapComponent } from './transformation/map/map.component';
import { ConcatMapComponent } from './transformation/concat-map/concat-map.component';
import { PluckComponent } from './transformation/pluck/pluck.component';
import { ScanComponent } from './transformation/scan/scan.component';
import { FilteringComponent } from './filtering/filtering.component';
import { FilterComponent } from './filtering/filter/filter.component';
import { DebounceTimeComponent } from './filtering/debounce-time/debounce-time.component';
import { TakeComponent } from './filtering/take/take.component';
import { DistinctUntilChangedComponent } from './filtering/distinct-until-changed/distinct-until-changed.component';
import { TakeUntilComponent } from './filtering/take-until/take-until.component';

const operatorsRoutes: Routes = [
  //transform
  { path: 'transform',  component: transformComponent
    // children: [{path: 'switchMap', component: SwitchMapComponent}]
  },
  { path: 'transform/switchMap',  component: SwitchMapComponent},
  { path: 'transform/switchMapTo',  component: SwitchMapToComponent},
  { path: 'transform/switchScan',  component: SwitchScanComponent},
  { path: 'transform/map',  component: MapComponent},
  { path: 'transform/concatMap',  component: ConcatMapComponent},
  { path: 'transform/pluck',  component: PluckComponent},
  { path: 'transform/scan',  component: ScanComponent},

  // filtering
  { path: 'filtering',  component: FilteringComponent
  },
  { path: 'filtering/filter',  component: FilterComponent},
  { path: 'filtering/debouceTime',  component: DebounceTimeComponent},
  { path: 'filtering/take',  component: TakeComponent},
  { path: 'filtering/distinctUntilChanged',  component: DistinctUntilChangedComponent },
  { path: 'filtering/takeUntil',  component: TakeUntilComponent }
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
