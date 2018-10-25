import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackButtonEventHandler } from '../handlers/back-button.handler';

@Injectable()
export class BusyIndicatorService {

  safeSvg: any;
  backButtonHandle: any;

  constructor(
    private loadingCtrl: LoadingController,
    private sanitizer: DomSanitizer,
    private backButtonHandler: BackButtonEventHandler) {
      this.safeSvg = "Please wait...";
  }

  show(): any {
    this.backButtonHandle = this.backButtonHandler.disableEvent();
    let indicator = this.loadingCtrl.create({
      spinner: 'hide',
      content: this.safeSvg,
    });
    indicator.present();
    return indicator
  }

  hide(indicator) {
    this.backButtonHandle();
    if (indicator) indicator.dismiss();
  }

}
