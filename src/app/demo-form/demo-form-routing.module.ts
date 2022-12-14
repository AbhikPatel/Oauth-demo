import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormOnePresentationComponent } from './form-container/form-one-presentation/form-one-presentation.component';
import { FormThreePresentationComponent } from './form-container/form-three-presentation/form-three-presentation.component';
import { FormTwoPresentationComponent } from './form-container/form-two-presentation/form-two-presentation.component';

const routes: Routes = [
  { path: '', component: FormContainerComponent,
    children:[
      { path:'', redirectTo:'one', pathMatch:'full'},
      { path:'one', component:FormOnePresentationComponent },
      { path:'two', component:FormTwoPresentationComponent },
      { path:'three', component:FormThreePresentationComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFormRoutingModule { }
