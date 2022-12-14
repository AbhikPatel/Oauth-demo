import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../../demo.service';
import { FormTwoPresenterService } from '../form-two-presenter/form-two-presenter.service';

@Component({
  selector: 'app-form-two-presentation',
  templateUrl: './form-two-presentation.component.html',
  viewProviders: [FormTwoPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTwoPresentationComponent implements OnInit {

  public twoGroup: FormGroup;
  constructor(
    private service: FormTwoPresenterService,
    private route: Router,
    private mainService: DemoService,
  ) {
    this.twoGroup = this.service.getBuilder();
  }

  ngOnInit(): void {
    this.service.formTwoData$.subscribe((data) => {
      if(this.mainService.dataArray.length === 1)
        this.mainService.dataArray.push(data)
      else{
        this.mainService.dataArray.splice(1,1)
        this.mainService.dataArray.splice(1,0,data)
      }
    })

    if(this.mainService.dataArray[1])
      this.twoGroup.patchValue(this.mainService.dataArray[1])
  }

  public onNext() {
    if (this.twoGroup.valid)
      this.service.getFormData(this.twoGroup.value)
      this.route.navigateByUrl('/demo/three');
    }
    
    public onPre() {
    if (this.twoGroup.valid)
      this.service.getFormData(this.twoGroup.value)
    this.route.navigateByUrl('/demo/one');
  }

}
