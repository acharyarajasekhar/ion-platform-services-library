import { Component } from '@angular/core';
import { BusyIndicatorService } from '../../modules';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private budyInd: BusyIndicatorService) {}

  onClick() {
    console.log("Clicked");
    let i = this.budyInd.show();
    setTimeout(() => {
      this.budyInd.hide(i);
    }, 3000);
  }

}