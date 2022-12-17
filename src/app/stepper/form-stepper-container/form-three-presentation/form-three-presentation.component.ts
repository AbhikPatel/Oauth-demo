import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-three-presentation',
  templateUrl: './form-three-presentation.component.html'
})
export class FormThreePresentationComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
  }

  public onNext(){
  }

  public onPre(){
    this.route.navigateByUrl('/stepper/two')
  }
}
