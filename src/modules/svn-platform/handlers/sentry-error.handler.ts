import { IonicErrorHandler } from 'ionic-angular';
import * as Raven from 'raven-js';

export class SentryErrorHandler extends IonicErrorHandler {

    handleError(error) {
        super.handleError(error);

        try {
            Raven.captureException(error.originalError || error);
        }
        catch (e) {
            console.error(e);
        }
    }
}