import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-integrated-add-new-buttons',
  templateUrl: './integrated-add-new-buttons.component.html',
  styleUrls: ['./integrated-add-new-buttons.component.css']
})
export class IntegratedAddNewButtonsComponent {

  buttonName_submit: string = 'Submit';
  buttonName_reset: string = 'Reset';
  button_name: string = ''; 
  module_name: string = ''; 
  response_status: any = null; 

  constructor(private oneapiservices: OneApiServicesService) {}

  submitForm() {
    const notificationData = {
      button_name: this.button_name,
      app_source: this.module_name
    };

    this.oneapiservices.submitAppButtonName(notificationData).subscribe({
      next: (response) => {
        this.response_status = response.msg; 
      },
      error: (error) => {
        this.response_status = error;
      },
    });
  }

}
