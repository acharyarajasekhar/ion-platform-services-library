import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
    selector: 'ion-upload-indicator',
    templateUrl: 'ion-upload-indicator.component.html',
    styleUrls: ['ion-upload-indicator.component.scss']
})
export class IonUploadIndicatorComponent {

    @Input() bdColor = 'rgba(51,51,51,0.8)';
    @Input() color = '#fff';
    @Input() icon = "alert";
    @Input() message = "Critical Message";

    current: number = 0;
    total: number = 0;
    progress: number = 0;

    constructor(private events: Events) { }

    ngOnInit() {
        this.events.subscribe('on-upload-status-update', (status) => {
            if (status) {
                this.current = status.current;
                this.total = status.total;
                this.progress = status.progress
            }
        })
    }

}
