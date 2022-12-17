import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOnePresentationComponent } from './form-stepper-container/form-one-presentation/form-one-presentation.component';
import { FormStepperContainerComponent } from './form-stepper-container/form-stepper-container.component';
import { FormThreePresentationComponent } from './form-stepper-container/form-three-presentation/form-three-presentation.component';
import { FormTwoPresentationComponent } from './form-stepper-container/form-two-presentation/form-two-presentation.component';

const routes: Routes = [
  { path: '', component: FormStepperContainerComponent,
    children:[
      { path:'', redirectTo:'one', pathMatch:'full'},
      { path:'one', component:FormOnePresentationComponent},
      { path:'two', component:FormTwoPresentationComponent},
      { path:'three', component:FormThreePresentationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
