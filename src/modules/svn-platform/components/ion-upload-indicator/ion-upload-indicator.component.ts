import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';
import { UploadIndicatorService } from '../../services/upload-indicator.service';

@Component({
    selector: 'ion-upload-indicator',
    templateUrl: 'ion-upload-indicator.component.html',
    styleUrls: ['ion-upload-indicator.component.scss']
})
export class IonUploadIndicatorComponent {

    @Input() bdColor = 'rgba(0,0,0,0.3)';
    @Input() bgColor = 'rgb(89,40,177, 1)';
    @Input() color = '#fff';
    @Input() icon = "ios-cloud-upload-outline";

    showUploadProgress: boolean = false;
    current: number = 0;
    total: number = 0;
    progress: number = 0;

    constructor(private events: Events, private uploadIndicatorSvc: UploadIndicatorService) { }

    ngOnInit() {

        this.uploadIndicatorSvc.uploadIndicatorObservable.subscribe(flag => {
            this.showUploadProgress = flag;
            this.progress = 0;
        });

        this.events.subscribe('on-upload-status-update', (status) => {
            if (status) {
                this.current = status.current;
                this.total = status.total;
                this.progress = status.progress
            }
        });

    }

}
