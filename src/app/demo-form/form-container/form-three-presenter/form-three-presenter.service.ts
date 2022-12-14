import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class FormThreePresenterService {

  private formThreeData:Subject<any>;
  public formThreeData$:Observable<any>;
  constructor(private fb:FormBuilder) { 
    this.formThreeData = new Subject();
    this.formThreeData$ = new Observable();
    this.formThreeData$ = this.formThreeData.asObservable();
  }

  public getBuilder(){
    return this.fb.group({
      company:[''],
      experience:[''],
      tech:[''],
    })
  }

  public getFormData(data:any){
    this.formThreeData.next(data)
  }
}
