import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stepper', loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule) },
  { path:'', redirectTo:'stepper', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
