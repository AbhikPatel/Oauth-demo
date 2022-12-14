import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormTwoPresenterService {
 
  private formTwoData:Subject<any>;
  public formTwoData$:Observable<any>;
  constructor(private fb:FormBuilder) { 
    this.formTwoData = new Subject();
    this.formTwoData$ = new Observable();
    this.formTwoData$ = this.formTwoData.asObservable();
  }

  public getBuilder(){
    return this.fb.group({
      mail:[''],
      gender:[''],
      birth:['']
    })
  }

  public getFormData(data:any){
    this.formTwoData.next(data)
  }
}
