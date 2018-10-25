import { Injectable } from "@angular/core";
import { Events, Platform, App } from "ionic-angular";
import { ToastMessageService } from "../services/toast-message.service";

@Injectable()
export class BackButtonEventHandler {

    backButtonPressedTimer: any;
    backButtonPressed = false;

    appLevelHandle: any = null;

    listOfExitPages: Array<string> = ["HomePage", "LoginPage"];

    constructor(private platform: Platform,
        private app: App,
        private events: Events,
        private toast: ToastMessageService) {
    }

    registerAppLevelHandler() {

        if (this.appLevelHandle) {
            return;
        }

        this.appLevelHandle = this.platform.registerBackButtonAction(() => {

            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();

            if (this.listOfExitPages.indexOf(activeView.name) !== -1) {
                this.showExit();
            } else {
                const overlayView = this.app._appRoot._overlayPortal._views[0];
                if (overlayView && overlayView.dismiss) {
                    overlayView.dismiss();
                } else {
                    if (nav.canGoBack()) { //Can we go back?
                        nav.pop();
                    } else {
                        this.goBackToHome();
                    }
                }
            }
        });

    }

    public goBackToHome() {
        this.events.publish('tabber.tabs.select', 0);
    }

    // show the message toast
    private showExit() {
        if (this.backButtonPressed) {
            this.platform.exitApp(); // Close this application
        } else {
            this.toast.show('Press again to exit App', false, 2000, 'bottom');
            this.backButtonPressed = true;
            if (this.backButtonPressedTimer) {
                clearTimeout(this.backButtonPressedTimer);
            }
            this.backButtonPressedTimer = setTimeout(() => {
                this.backButtonPressed = false
            }, 2000);
        }
    }

    registerPageLevelEvent(): any {

        return this.platform.registerBackButtonAction(() => {
            const overlayView = this.app._appRoot._overlayPortal._views[0];
            if (overlayView && overlayView.dismiss) {
                overlayView.dismiss();
            } else {
                this.app.goBack();
            }
        }, 0);

    }

    disableEvent(): any {
        return this.platform.registerBackButtonAction(() => {
            console.log("Backbutton is disabled");
        }, 0);
    }

    unregisterPageLevelEvent(handle) {
        handle && typeof handle === "function" && handle();
    }

}