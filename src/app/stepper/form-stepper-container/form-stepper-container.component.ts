import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-stepper-container',
  templateUrl: './form-stepper-container.component.html'
})
export class FormStepperContainerComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  public formHeader = [
    {
      formText:'School Details',
      count:1
    },
    {
      formText:'Principle and Teachers Details',
      count:2
    },
    {
      formText:'School Details Information',
      count:3
    },
  ];

  public formNavigation(){
    if(this.route.url === '/stepper/one')
      return 1;
    else if(this.route.url === '/stepper/two')
      return 2;
    else 
      return 3;
  }

}
