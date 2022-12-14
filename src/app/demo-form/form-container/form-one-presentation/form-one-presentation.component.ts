import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../../demo.service';
import { FormOnePresenterService } from '../form-one-presenter/form-one-presenter.service';

@Component({
  selector: 'app-form-one-presentation',
  templateUrl: './form-one-presentation.component.html',
  viewProviders: [FormOnePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormOnePresentationComponent implements OnInit {

  public oneGroup: FormGroup;
  
  constructor(
    private service: FormOnePresenterService,
    private mainService: DemoService,
    private route: Router,
  ) {
    this.oneGroup = this.service.getBuild();
  }

  ngOnInit(): void {
    this.service.formOneData$.subscribe((data) => {
      if(this.mainService.dataArray.length === 0)
        this.mainService.dataArray.push(data)
      else{
        this.mainService.dataArray.splice(0,1)
        this.mainService.dataArray.splice(0,0,data)
      }
    });

    if(this.mainService.dataArray[0])
      this.oneGroup.patchValue(this.mainService.dataArray[0])
  }

  public onNext() {
    if (this.oneGroup.valid)
      this.service.getFormData(this.oneGroup.value)

    this.route.navigateByUrl('/demo/two')
  }
}
