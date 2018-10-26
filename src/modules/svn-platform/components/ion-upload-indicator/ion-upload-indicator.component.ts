import { Component, Input } from '@angular/core';
import { Events } from 'ionic-angular';

const STYLES =
    `
    .upload-content {
        font-size: 3em;
        align-content: center;
        text-align: center;
    }
    
    .upload-black-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99999 !important;
    }
    
    .upload-black-overlay>div {
        top: 50%;
        left: 50%;
        margin: 0;
        position: absolute;
        transform: translate(-50%, -50%);
    }
    
    .upload-black-overlay>.upload-content>p {
        font-family: sans-serif;
        font-weight: 100;
        font-size: 1.4rem;
        margin-top: 4px;
        margin-bottom: 24px;
    }
    
    #upload-status {
        width: 200px;
      text-align: center;
      align-items: center;
      margin-top: 10%;
      margin-bottom: 10%;
    }    
    #upload-icon {
        font-size: 2em;
    }
    #pregress-value {
        width: 100%;
        text-align: center;
    }
    .progress-outer {
          width: 100%;
          // margin: 10px 2%;
          padding: 2px;
          text-align: center;
          // background-color: #f4f4f4;
          border: 1px solid #dcdcdc;
          color: #000;
          border-radius: 20px;
      } 
      .progress-inner {
          height: 5px;
          white-space: nowrap;
          overflow: hidden;
          // padding: 5px;
          border-radius: 20px;
          background-color: white;
      } 
`

@Component({
    selector: 'ion-upload-indicator',
    templateUrl: 'ion-upload-indicator.component.html',
    styles: [STYLES]
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
