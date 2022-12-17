import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-one-presentation',
  templateUrl: './form-one-presentation.component.html'
})
export class FormOnePresentationComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  public onNext(){
    this.route.navigateByUrl('/stepper/two')
  }
}
