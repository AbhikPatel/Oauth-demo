import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  public pre:boolean;
  constructor(private route:Router) { 
    this.pre = true;
  }

  ngOnInit(): void {
  }
}
