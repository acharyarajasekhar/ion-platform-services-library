import { Component, Input } from '@angular/core';

@Component({
  selector: 'network-down-alert',
  templateUrl: 'ion-critical-alert.component.html',
  styleUrls: ['ion-critical-alert.component.scss']
})
export class IonCriticalAlertComponent {

  @Input() bdColor = 'rgba(51,51,51,0.8)';
  @Input() color = '#fff';
  @Input() icon = "alert";
  @Input() message = "Critical Message";

}
