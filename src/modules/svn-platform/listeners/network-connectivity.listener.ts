
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Subject } from 'rxjs/Subject';
import { DynamicDomInjectorService } from '../services/dynamic-dom-injector.service';
import { BackButtonEventHandler } from '../handlers/back-button.handler';
import { IonCriticalAlertComponent } from '../components/ion-network-alert/ion-critical-alert.component';

@Injectable()
export class NetworkConnectivityListener {

    backButtonHandle: any;
    componentRef: any;
    networkObservable = new Subject<boolean>();

    criticalAlertOptions = {
        bdColor: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        icon: "alert",
        message: "Netowrk Down<br/><br/>Please check your internet connectivity..."
    };

    constructor(
        private network: Network,
        private backButtonHandler: BackButtonEventHandler,
        private dynamicDomInjector: DynamicDomInjectorService
    ) {

        this.network.onchange().subscribe(() => {
            this.networkObservable.next(this.isOk());
        })

        this.network.onConnect().subscribe(() => {
            this.networkObservable.next(true);
        });

        this.network.onDisconnect().subscribe(() => {
            this.networkObservable.next(false);
        })

        this.networkObservable.subscribe(isAvailable => {
            if (!isAvailable) {
                if (!this.componentRef) {
                    this.attachAlert();
                }
            } else {
                if (this.componentRef) {
                    this.detachAlert();
                }
            }
        });

    }

    setNetworkAlertOptions(options) {
        this.criticalAlertOptions = { ...this.criticalAlertOptions, ...options };
    }

    private isOk() {
        switch (this.network.type) {
            case this.network.Connection.NONE:
            case this.network.Connection.UNKNOWN:
                return false;
            default: return true;
        }
    }

    attachAlert() {
        this.backButtonHandle = this.backButtonHandler.disableEvent();
        this.componentRef = this.dynamicDomInjector.attach(IonCriticalAlertComponent, this.criticalAlertOptions);
    }

    detachAlert() {
        this.backButtonHandle();
        this.dynamicDomInjector.detach(this.componentRef);
        this.componentRef = undefined;
    }

}
