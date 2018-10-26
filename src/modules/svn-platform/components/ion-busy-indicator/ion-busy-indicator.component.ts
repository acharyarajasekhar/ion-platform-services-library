import { Component, OnDestroy, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LOADERS } from './ion-busy-indicator.layout';
import { BusyIndicatorService } from '../../services/busy-indicator.service';

@Component({
    selector: 'ion-busy-indicator',
    templateUrl: 'ion-busy-indicator.component.html',
    styleUrls: ['ion-busy-indicator.component.scss']
})

export class IonBusyIndicatorComponent implements OnDestroy, OnInit, OnChanges {

    @Input() bdColor = 'rgba(0,0,0,0.3)';
    @Input() color = 'rgb(89,40,177, 1)';
    @Input() size = 'default';
    @Input() bgColor = '#fff';
    @Input() type = "timer";
    @Input() loadingText = "Please Wait";

    spinnerClass: string;
    showSpinner: boolean = false;
    spinnerSubscription: Subscription;
    divArray: Array<number> = [];
    divCount = 0;

    constructor(private busyIndicatorSvc: BusyIndicatorService) {
        this.busyIndicatorSvc.busyInidicatorObservable.subscribe(flag => {
            this.showSpinner = flag;
        })
    }

    ngOnInit() {
        this.onInputChange();
    }

    ngOnChanges(changes: SimpleChanges) {
        const typeChange: SimpleChange = changes.type;
        const sizeChange: SimpleChange = changes.size;

        if (typeChange) {
            if (typeof typeChange.currentValue !== 'undefined' && typeChange.currentValue !== typeChange.previousValue) {
                if (typeChange.currentValue !== '') {
                    this.type = typeChange.currentValue;
                    this.onInputChange();
                }
            }
        }

        if (sizeChange) {
            if (typeof sizeChange.currentValue !== 'undefined' && sizeChange.currentValue !== sizeChange.previousValue) {
                if (sizeChange.currentValue !== '') {
                    this.size = sizeChange.currentValue;
                    this.onInputChange();
                }
            }
        }
    }

    getClass(type = 'ball-scale-multiple', size = 'large'): string {
        this.divCount = LOADERS[type];
        this.divArray = Array(this.divCount).fill(0).map((x, i) => i);
        let sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    }

    onInputChange() {
        this.spinnerClass = this.getClass(this.type, this.size);
    }

    ngOnDestroy() {

    }
}