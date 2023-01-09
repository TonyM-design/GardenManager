import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-scroll-menu',
  templateUrl: './scroll-menu.component.html',
  styleUrls: ['./scroll-menu.component.scss']
})


export class ScrollMenuComponent implements OnInit {
  
  public stepper!: Stepper;

  settings = "test"
  next() {
    
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
  ngOnInit() {
    const stepper = document.querySelector('#stepper1');

    if(stepper !== null){
    this.stepper = new Stepper(stepper , {
          linear: false,
          animation: true
        })
    }
}
}
