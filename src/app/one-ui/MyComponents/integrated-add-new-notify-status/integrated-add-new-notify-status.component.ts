import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-integrated-add-new-notify-status',
  templateUrl: './integrated-add-new-notify-status.component.html',
  styleUrls: ['./integrated-add-new-notify-status.component.css']
})
export class IntegratedAddNewNotifyStatusComponent {
  buttonName_submit: string = 'Submit';
  buttonName_reset: string = 'Reset';
  button_name: string = '';
  module_name: string = '';
  response_status: any[] = [];

  constructor(private oneapiservices : OneApiServicesService) {}

  submitForm() {
    const notificationData = {
      button_name: this.button_name,
      module_name: this.module_name
    };

    this.oneapiservices.submitNotificationStatus(notificationData).subscribe({
      next: (response) => {
        this.response_status = response.msg;
      },
      error:(error)=> {
        this.response_status = error;
      },
    } );
  }
}
