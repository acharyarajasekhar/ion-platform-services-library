
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
        bdColor: "rgba(0, 0, 0, 0.3)",
        bgColor: 'rgb(89,40,177, 1)',
        color: "#fff",
        icon: "alert",
        message: "No Internet Connection"
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
                    this.backButtonHandle = this.backButtonHandler.disableEvent();
                    this.componentRef = this.dynamicDomInjector.attach(IonCriticalAlertComponent, this.criticalAlertOptions);
                }
            } else {
                if (this.componentRef) {
                    this.backButtonHandle();
                    this.dynamicDomInjector.detach(this.componentRef);
                    this.componentRef = undefined;
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
