import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class FormOnePresenterService {

  constructor(private fb:FormBuilder) { }

  public getGroup(){
    return this.fb.group({
      schoolName:[''],
      schoolMail:[''],
      schoolPhone:[''],
      schoolAddress:[''],
      state:[''],
      city:[''],
      pincode:[''],
    })
  }
}
