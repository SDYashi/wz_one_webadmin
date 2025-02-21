import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-create-users',
  templateUrl: './user-create-users.component.html',
  styleUrls: ['./user-create-users.component.css']
})
export class UserCreateUsersComponent {
  user:any={};
  result: any;
  isProcessing: boolean=false;

  constructor(private oneapiservices:OneApiServicesService) { }
  onSubmit() {
    this.isProcessing = true;
    this.oneapiservices.createIntegrationUsers(this.user).subscribe({
      next: (response) => {
        this.result = response.msg;
        this.isProcessing = false;
      },
      error: (errors) => {
        this.result = errors.error.msg;
        this.isProcessing = false;
      },
    });
  }
  resetForm() {
    this.user = {};
  }

}
