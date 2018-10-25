import { Component } from '@angular/core';
import { BusyIndicatorService } from '../../modules';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private spinnerSvc: BusyIndicatorService) { }

  onClick() {
    console.log("Clicked");
    // let i = this.budyInd.show();
    // setTimeout(() => {
    //   this.budyInd.hide(i);
    // }, 3000);
    this.spinnerSvc.show();
    setTimeout(() => {
      console.log('after 10000');
      this.spinnerSvc.hide();
    }, 10000);
    setTimeout(() => {
      console.log('after 2000');
      this.spinnerSvc.show();
      setTimeout(() => {
        console.log('after 4000');
        this.spinnerSvc.hide();
      }, 2000);
    }, 2000);
  }

}