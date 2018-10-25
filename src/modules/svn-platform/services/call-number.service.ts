import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ToastMessageService } from './toast-message.service';

@Injectable()
export class CallNumberService {

  constructor(private callNumber: CallNumber, private toastr: ToastMessageService) { }

  call(phone) {
    if (phone) {
      this.callNumber.callNumber(phone, false)
        .then(res => this.toastr.show('Calling...'))
        .catch(err => this.toastr.show("Error while calling: " + JSON.stringify(err), true));
    } else {
      this.toastr.show("Phone number cannot be empty...", true)
    }
  }

}
