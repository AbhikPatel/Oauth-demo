import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormOnePresenterService } from '../form-one-presenter/form-one-presenter.service';

@Component({
  selector: 'app-form-one-presentation',
  templateUrl: './form-one-presentation.component.html',
  viewProviders:[FormOnePresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormOnePresentationComponent implements OnInit {

  public oneGroup:FormGroup;

  constructor(
    private service:FormOnePresenterService,
    private route:Router,
  ) { 
    this.oneGroup = this.service.getGroup();
  }

  ngOnInit(): void {
  }

  public onNext(){
    this.route.navigateByUrl('/stepper/two')
  }
}
