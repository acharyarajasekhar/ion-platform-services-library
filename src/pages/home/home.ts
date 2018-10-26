import { Component } from '@angular/core';
import { BusyIndicatorService } from '../../modules';
import { NetworkConnectivityListener } from '../../modules/svn-platform/listeners/network-connectivity.listener';
import { Events } from 'ionic-angular';
import { IonUploadIndicatorComponent } from '../../modules/svn-platform/components/ion-upload-indicator/ion-upload-indicator.component';
import { UploadIndicatorService } from '../../modules/svn-platform/services/upload-indicator.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private svc: NetworkConnectivityListener, private uploadInd: UploadIndicatorService, private events: Events, private busy: BusyIndicatorService) { 

  }

  loading() {
    console.log("Clicked");
    this.busy.show();
    setTimeout(() => {
      this.busy.hide();
    }, 3000);
  }

  alert() {
    console.log("Clicked");
    this.svc.networkAlertObservable.next(true);
    setTimeout(() => {
      // this.svc.networkAlertObservable.next(false);
    }, 3000);
  }

  progress: number = 0;
  handle: any;

  upload() {
    this.progress = 0;
    this.uploadInd.show();
    this.handle = setInterval(() => { this.ticks(); this.progress += 10; }, 500);
  }

  ticks() {
    console.log(this.progress);
    this.events.publish('on-upload-status-update', {
      current: 1,
      total: 1,
      progress: this.progress
    })
    if (this.progress === 100) {
      this.uploadInd.hide();
      clearInterval(this.handle);
    }
  }

}