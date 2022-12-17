import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { FormStepperContainerComponent } from './form-stepper-container/form-stepper-container.component';
import { FormOnePresentationComponent } from './form-stepper-container/form-one-presentation/form-one-presentation.component';
import { FormTwoPresentationComponent } from './form-stepper-container/form-two-presentation/form-two-presentation.component';
import { FormThreePresentationComponent } from './form-stepper-container/form-three-presentation/form-three-presentation.component';


@NgModule({
  declarations: [
    StepperComponent,
    FormStepperContainerComponent,
    FormOnePresentationComponent,
    FormTwoPresentationComponent,
    FormThreePresentationComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule
  ]
})
export class StepperModule { }
