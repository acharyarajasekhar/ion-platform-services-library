import { IonicErrorHandler } from 'ionic-angular';
import Raven from 'raven-js';

Raven
    .config('https://baf78b0ae79443e294a5266e6446f8e8@sentry.io/1305044')
    .install();

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