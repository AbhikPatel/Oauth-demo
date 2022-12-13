import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { DemoThreeComponent } from './demo-three/demo-three.component';
import { DemoTwoComponent } from './demo-two/demo-two.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent,
    children:[
      {path:'', redirectTo:'one', pathMatch:'full'},
      {path:'one', component:DemoOneComponent},
      {path:'two', component:DemoTwoComponent},
      {path:'three', component:DemoThreeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
