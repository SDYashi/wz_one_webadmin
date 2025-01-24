import { Component } from '@angular/core';

@Component({
  selector: 'app-integrated-add-new-notify-status',
  templateUrl: './integrated-add-new-notify-status.component.html',
  styleUrls: ['./integrated-add-new-notify-status.component.css']
})
export class IntegratedAddNewNotifyStatusComponent {

<<<<<<< HEAD
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
      error:(errors)=> {
        this.response_status = errors.error.msg;
      },
    } );
  }
=======
>>>>>>> parent of cfd6709 (admin login created)
}
