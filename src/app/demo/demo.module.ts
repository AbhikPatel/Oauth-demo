import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { DemoTwoComponent } from './demo-two/demo-two.component';
import { DemoThreeComponent } from './demo-three/demo-three.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DemoComponent,
    DemoOneComponent,
    DemoTwoComponent,
    DemoThreeComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule
  ]
})
export class DemoModule { }
