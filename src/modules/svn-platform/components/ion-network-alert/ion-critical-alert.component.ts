import { Component, Input } from '@angular/core';

@Component({
  selector: 'network-down-alert',
  templateUrl: 'ion-critical-alert.component.html',
  styleUrls: ['ion-critical-alert.component.scss']
})
export class IonCriticalAlertComponent {

  @Input() bdColor = 'rgba(0,0,0,0.3)';
  @Input() bgColor = 'rgb(89,40,177, 1)';
  @Input() color = '#fff';
  @Input() icon = "alert";
  @Input() message = "Critical Message";

}
