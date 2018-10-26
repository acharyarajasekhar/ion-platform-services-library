import { Injectable } from '@angular/core';
import { BackButtonEventHandler } from '../handlers/back-button.handler';
import { DynamicDomInjectorService } from './dynamic-dom-injector.service';
import { IonBusyIndicatorComponent } from '../components/ion-busy-indicator/ion-busy-indicator.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BusyIndicatorService {

  backButtonHandle: any;
  componentRef: any;
  spinnerObservable = new Subject<boolean>();
  subscriberCount: number = 0;

  busyIndicatorOptions = {
    bdColor: "rgba(0, 0, 0, 0.5)",
    size: "default",
    color: "#fff",
    type: "timer",
    loadingText: "Please Wait"
  };

  constructor(
    private backButtonHandler: BackButtonEventHandler,
    private dynamicDomInjector: DynamicDomInjectorService
  ) {
    this.spinnerObservable.subscribe(flag => {
      if (flag) {
        if (!this.componentRef) {
          this.backButtonHandle = this.backButtonHandler.disableEvent();
          this.componentRef = this.dynamicDomInjector.attach(IonBusyIndicatorComponent, this.busyIndicatorOptions);
        }
        this.subscriberCount++;
      } else {
        this.subscriberCount--;
        if (this.subscriberCount < 0) this.subscriberCount = 0;
        if (this.subscriberCount === 0 && this.componentRef) {
          this.backButtonHandle();
          this.dynamicDomInjector.detach(this.componentRef);
          this.componentRef = undefined;
        }
      }
    });
  }

  setBusyIndicatorOptions(options) {
    this.busyIndicatorOptions = { ...this.busyIndicatorOptions, ...options };
  }

  show(): any {
    this.spinnerObservable.next(true);
  }

  hide() {
    this.spinnerObservable.next(false);
  }

}