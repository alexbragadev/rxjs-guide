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
import { joinCreationComponent } from './joinCreation/joinCreation.component';
import { ConcatComponent } from './joinCreation/concat/concat.component';
import { ForkJoinComponent } from './joinCreation/fork-join/fork-join.component';
import { MergeComponent } from './joinCreation/merge/merge.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { CatchErrorComponent } from './error-handling/catch-error/catch-error.component';
import { RetryComponent } from './error-handling/retry/retry.component';
import { StartWithComponent } from './joinCreation/start-with/start-with.component';
import { UtilityComponent } from './utility-operators/utility.component';
import { TapComponent } from './utility-operators/tap/tap.component';
import { DelayComponent } from './utility-operators/delay/delay.component';
import { TimeoutComponent } from './utility-operators/timeout/timeout.component';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { TimestampComponent } from './utility-operators/timestamp/timestamp.component';
import { TimeIntervalComponent } from './utility-operators/time-interval/time-interval.component';
import { CreationComponent } from './creation/creation.component';
import { OfComponent } from './creation/of/of.component';
import { AjaxComponent } from './creation/ajax/ajax.component';
import { DeferComponent } from './creation/defer/defer.component';
import { FromComponent } from './creation/from/from.component';
import { IntervalComponent } from './creation/interval/interval.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { FindComponent } from './conditional/find/find.component';
import { MathematicalComponent } from './mathematical/mathematical.component';
import { CountComponent } from './mathematical/count/count.component';
import { MaxComponent } from './mathematical/max/max.component';
import { MinComponent } from './mathematical/min/min.component';
import { ReduceComponent } from './mathematical/reduce/reduce.component';

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
  { path: 'filtering',  component: FilteringComponent},
  { path: 'filtering/filter',  component: FilterComponent},
  { path: 'filtering/debouceTime',  component: DebounceTimeComponent},
  { path: 'filtering/take',  component: TakeComponent},
  { path: 'filtering/distinctUntilChanged',  component: DistinctUntilChangedComponent },
  { path: 'filtering/takeUntil',  component: TakeUntilComponent },

  //joinCreation
  { path: 'joinCreation',  component: joinCreationComponent},
  { path: 'joinCreation/concat',  component: ConcatComponent},
  { path: 'joinCreation/forkJoin',  component: ForkJoinComponent},
  { path: 'joinCreation/merge',  component: MergeComponent },
  { path: 'joinCreation/start-with',  component: StartWithComponent },
  //errorHandling
  { path: 'errorHandling',  component: ErrorHandlingComponent},
  { path: 'errorHandling/catchError',  component: CatchErrorComponent},
  { path: 'errorHandling/retry',  component: RetryComponent},
  //utility operators
  { path: 'utility',  component: UtilityComponent},
  { path: 'utility/tap',  component: TapComponent},
  { path: 'utility/delay',  component: DelayComponent},
  { path: 'utility/timestamp',  component: TimestampComponent},
  { path: 'utility/timeInterval',  component: TimeIntervalComponent},
  { path: 'utility/timeout',  component: TimeoutComponent},
  //creation operators
  { path: 'creation',  component: CreationComponent},
  { path: 'creation/of',  component: OfComponent},
  { path: 'creation/ajax',  component: AjaxComponent},
  { path: 'creation/defer',  component: DeferComponent},
  { path: 'creation/from',  component: FromComponent},
  { path: 'creation/interval',  component: IntervalComponent},
  //conditional operators
  { path: 'conditional',  component: ConditionalComponent},
  { path: 'conditional/find',  component: FindComponent},
  //mathematical operators
  { path: 'mathematical',  component: MathematicalComponent},
  { path: 'mathematical/count',  component: CountComponent},
  { path: 'mathematical/max',  component: MaxComponent},
  { path: 'mathematical/min',  component: MinComponent},
  { path: 'mathematical/reduce',  component: ReduceComponent},
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
