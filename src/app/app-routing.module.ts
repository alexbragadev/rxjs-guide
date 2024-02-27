import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { operatorComponent } from './operators/operators.component';

const appRoutes: Routes = [
  { path: 'operators',  component: operatorComponent},
  // rota padrão quando o cliente entrar ou se colocar /+vazio
  { path: '',   redirectTo: '/operators', pathMatch: 'full' },
  // rota curinga
  { path: '**', component: operatorComponent}
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
