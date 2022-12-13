import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MasterComponent
  ]
})
export class CoreModule { }
