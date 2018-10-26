import { Injectable } from '@angular/core';
import { BackButtonEventHandler } from '../handlers/back-button.handler';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BusyIndicatorService {

  backButtonHandle: any;
  busyInidicatorObservable = new Subject<boolean>();

  constructor(
    private backButtonHandler: BackButtonEventHandler
  ) { }

  show(): any {
    this.backButtonHandle = this.backButtonHandler.disableEvent();
    this.busyInidicatorObservable.next(true);
  }

  hide() {
    this.backButtonHandle();
    this.busyInidicatorObservable.next(false);
  }

}