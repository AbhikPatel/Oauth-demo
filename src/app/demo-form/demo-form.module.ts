import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoFormRoutingModule } from './demo-form-routing.module';
import { DemoFormComponent } from './demo-form.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormOnePresentationComponent } from './form-container/form-one-presentation/form-one-presentation.component';
import { FormTwoPresentationComponent } from './form-container/form-two-presentation/form-two-presentation.component';
import { FormThreePresentationComponent } from './form-container/form-three-presentation/form-three-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoService } from './demo.service';


@NgModule({
  declarations: [
    DemoFormComponent,
    FormContainerComponent,
    FormOnePresentationComponent,
    FormTwoPresentationComponent,
    FormThreePresentationComponent
  ],
  imports: [
    CommonModule,
    DemoFormRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    DemoService
  ]
})
export class DemoFormModule { }
