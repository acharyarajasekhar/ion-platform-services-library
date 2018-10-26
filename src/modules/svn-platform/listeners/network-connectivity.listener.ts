
import { Injectable } from '@angular/core';
import { Network, Connection } from '@ionic-native/network';
import { Subject } from 'rxjs/Subject';
import { BackButtonEventHandler } from '../handlers/back-button.handler';

@Injectable()
export class NetworkConnectivityListener {

    backButtonHandle: any;
    componentRef: any;
    networkAlertObservable = new Subject<boolean>();

    constructor(
        private network: Network,
        private backButtonHandler: BackButtonEventHandler
    ) {
        this.network.onConnect().subscribe(data => {
            if (this.backButtonHandle) this.backButtonHandle();
            this.networkAlertObservable.next(false);
        })
        this.network.onDisconnect().subscribe(data => {
            this.backButtonHandle = this.backButtonHandler.disableEvent();
            this.networkAlertObservable.next(true);
        })

        switch (this.network.type) {
            case 'unknown':
            case 'none':
                this.backButtonHandle = this.backButtonHandler.disableEvent();
                this.networkAlertObservable.next(true);
                break;
            default:
                if (this.backButtonHandle) this.backButtonHandle();
                this.networkAlertObservable.next(false);
                break;
        }

    }

}
