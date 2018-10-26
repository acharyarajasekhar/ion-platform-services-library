import { Component, Input } from '@angular/core';
import { NetworkConnectivityListener } from '../../listeners/network-connectivity.listener';

@Component({
  selector: 'ion-network-alert',
  templateUrl: 'ion-network-alert.component.html',
  styleUrls: ['ion-network-alert.component.scss']
})
export class IonNetworkAlertComponent {

  @Input() bdColor = 'rgba(0,0,0,0.3)';
  @Input() bgColor = 'rgb(89,40,177, 1)';
  @Input() color = '#fff';
  @Input() icon = "alert";
  @Input() message = "Critical Message";

  showAlert: boolean = false;

  constructor(private networkSvc: NetworkConnectivityListener) {
    this.networkSvc.networkAlertObservable.subscribe(flag => this.showAlert = flag);
  }

}
