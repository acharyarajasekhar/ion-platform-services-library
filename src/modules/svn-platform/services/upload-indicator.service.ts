import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BackButtonEventHandler } from '../handlers/back-button.handler';
import { DynamicDomInjectorService } from './dynamic-dom-injector.service';
import { IonUploadIndicatorComponent } from '../components/ion-upload-indicator/ion-upload-indicator.component';

@Injectable()
export class UploadIndicatorService {

    backButtonHandle: any;
    componentRef: any;
    uploadObservable = new Subject<boolean>();

    uploadIndicatorOptions = {
        bdColor: "rgba(0, 0, 0, 0.3)",
        color: "#fff",
        icon: "ios-cloud-upload-outline",
        bgColor: 'rgb(89,40,177, 1)'
    };

    constructor(
        private backButtonHandler: BackButtonEventHandler,
        private dynamicDomInjector: DynamicDomInjectorService
    ) { }

    setUploadIndicatorOptions(options) {
        this.uploadIndicatorOptions = { ...this.uploadIndicatorOptions, ...options };
    }

    show() {
        this.backButtonHandle = this.backButtonHandler.disableEvent();
        this.componentRef = this.dynamicDomInjector.attach(IonUploadIndicatorComponent, this.uploadIndicatorOptions);
    }

    hide() {
        this.backButtonHandle();
        this.dynamicDomInjector.detach(this.componentRef);
        this.componentRef = undefined;
    }

}
