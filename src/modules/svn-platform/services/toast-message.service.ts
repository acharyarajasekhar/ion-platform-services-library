import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { SentryLoggerService } from './sentry-logger.service';

@Injectable()
export class ToastMessageService {

  constructor(private toastCtrl: ToastController, private sentry: SentryLoggerService) { }

  show(message, isError = false, duration = 5000, position = 'bottom') {
    let opt = {
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: ""
    };

    opt.cssClass = isError ? "error-message" : "info-message";
    opt.duration = duration;
    opt.position = position;

    let tc = this.toastCtrl.create(opt);
    tc.present();

    if (isError) this.sentry.log(message);
  }

}
