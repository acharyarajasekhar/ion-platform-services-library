import { Component, Input } from '@angular/core';

const STYLES =
  `
.alert-content {
    font-size: 3em;
    align-content: center;
    text-align: center;
}

.alert-black-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999 !important;
}

.alert-black-overlay>div {
  top: 50%;
  left: 50%;
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
}

.alert-black-overlay>.alert-content>p {  
  font-family: sans-serif;
  font-weight: 100;
  font-size: 1.4rem;
}
`

@Component({
  selector: 'network-down-alert',
  templateUrl: 'ion-critical-alert.component.html',
  styles: [STYLES]
})
export class IonCriticalAlertComponent {

  @Input() bdColor = 'rgba(51,51,51,0.8)';
  @Input() color = '#fff';
  @Input() icon = "alert";
  @Input() message = "Critical Message";

}
