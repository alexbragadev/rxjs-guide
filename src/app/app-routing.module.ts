import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';

const appRoutes: Routes = [
  { path: 'switchMap', component:  SwitchMapComponent},
/* . . . */
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // curinga { path: '**', component:  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
