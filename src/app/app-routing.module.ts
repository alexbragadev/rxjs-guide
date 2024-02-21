import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { operatorComponent } from './operators/operators.component';

const appRoutes: Routes = [
  { path: 'operators',  component: operatorComponent},
  { path: '',   redirectTo: '/operators', pathMatch: 'full' },
  // curinga { path: '**', component:  }
];

@NgModule({
  declarations: [],
  imports: [
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
