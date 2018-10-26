import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BackButtonEventHandler } from '../handlers/back-button.handler';

@Injectable()
export class UploadIndicatorService {

    backButtonHandle: any;
    uploadIndicatorObservable = new Subject<boolean>();

    constructor(
        private backButtonHandler: BackButtonEventHandler
    ) { }

    show() {
        this.backButtonHandle = this.backButtonHandler.disableEvent();
        this.uploadIndicatorObservable.next(true);
    }

    hide() {
        this.backButtonHandle();
        this.uploadIndicatorObservable.next(false);
    }

}
