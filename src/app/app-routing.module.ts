import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'demo', pathMatch:'full'},
  { path: 'demo', loadChildren: () => import('./demo-form/demo-form.module').then(m => m.DemoFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
