import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-two-presentation',
  templateUrl: './form-two-presentation.component.html'
})
export class FormTwoPresentationComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  public onNext(){
    this.route.navigateByUrl('/stepper/three')
  }

  public onPre(){
    this.route.navigateByUrl('/stepper/one')
  }

}
