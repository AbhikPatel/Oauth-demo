import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html'
})
export class FormContainerComponent implements OnInit {

  public btnText: string;
  constructor(private route: Router) {
    this.btnText = 'Next'
  }

  ngOnInit(): void {
  }

  public stepper = [
    {
      num: 1,
      text: 'one',
      router: '/demo/one'
    },
    {
      num: 2,
      text: 'two',
      router: '/demo/two'
    },
    {
      num: 3,
      text: 'three',
      router: '/demo/three'
    }
  ];

  public onNext() {
    if (this.route.url === '/demo/one')
      this.route.navigateByUrl('/demo/two')

    if (this.route.url === '/demo/two') {
      this.route.navigateByUrl('/demo/three')
      this.btnText = 'Submit'
    } else
      this.btnText = 'Next'
  }

  public onPre() {
    if (this.route.url === '/demo/three')
      this.route.navigateByUrl('/demo/two')

    if (this.route.url === '/demo/two')
      this.route.navigateByUrl('/demo/one')
  }

  public Check() {
    if (this.route.url === '/demo/one')
      return false
    else
      return true
  }

}
