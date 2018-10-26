import { Injectable } from '@angular/core';
import * as Raven from 'raven-js';

@Injectable()
export class SentryLoggerService {

    constructor() { }

    log(message: string) {
        console.log(message);
        Raven.captureMessage(message);
    }

}
