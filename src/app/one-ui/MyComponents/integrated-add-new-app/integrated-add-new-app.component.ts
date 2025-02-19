import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-integrated-add-new-app',
  templateUrl: './integrated-add-new-app.component.html',
  styleUrls: ['./integrated-add-new-app.component.css']
})
export class IntegratedAddNewAppComponent {

  app_name: string = ''; 
  response_status: any = null; 

 constructor(private oneapiservices: OneApiServicesService) {}

  submitForm() {
    const appData = {
      app_name: this.app_name
    };

    this.oneapiservices.submitAddAppName(appData).subscribe({
      next: (response) => {
        this.response_status = response.msg; 
      },
      error: (error) => {
        this.response_status = error; 
      },
    });
  }
}
