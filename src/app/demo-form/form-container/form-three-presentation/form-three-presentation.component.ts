import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../../demo.service';
import { FormThreePresenterService } from '../form-three-presenter/form-three-presenter.service';

@Component({
  selector: 'app-form-three-presentation',
  templateUrl: './form-three-presentation.component.html',
  viewProviders: [FormThreePresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormThreePresentationComponent implements OnInit {

  public threeGroup: FormGroup;
  constructor(
    private service: FormThreePresenterService,
    private route: Router,
    private mainService: DemoService,
  ) {
    this.threeGroup = this.service.getBuilder();
  }

  ngOnInit(): void {
    this.service.formThreeData$.subscribe((data) => {
      if(this.mainService.dataArray.length === 2)
        this.mainService.dataArray.push(data)
      else{
        this.mainService.dataArray.splice(2,1)
        this.mainService.dataArray.splice(2,0,data)
      }
    });

    if(this.mainService.dataArray[2])
      this.threeGroup.patchValue(this.mainService.dataArray[2])
  }

  public onNext() {
    if (this.threeGroup.valid)
      this.service.getFormData(this.threeGroup.value);
    }
    
    public onPre() {
    if (this.threeGroup.valid)
      this.service.getFormData(this.threeGroup.value);
    this.route.navigateByUrl('/demo/two')
  }

}
