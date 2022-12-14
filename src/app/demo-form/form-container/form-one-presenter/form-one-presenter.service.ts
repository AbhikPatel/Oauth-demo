import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormOnePresenterService {

  private formOneData:Subject<any>;
  public formOneData$:Observable<any>;

  constructor(private fb:FormBuilder) { 
    this.formOneData = new Subject();
    this.formOneData$ = new Observable();
    this.formOneData$ = this.formOneData.asObservable();
  }

  public getBuild(){
    return this.fb.group({
      name:['', [Validators.required]],
      age:['', [Validators.required]],
      phone:['', [Validators.required]],
    })
  }

  public getFormData(data:any){
    this.formOneData.next(data)
  }
}
