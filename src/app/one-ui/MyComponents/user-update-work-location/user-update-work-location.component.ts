import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-update-work-location',
  templateUrl: './user-update-work-location.component.html',
  styleUrls: ['./user-update-work-location.component.css']
})
export class UserUpdateWorkLocationComponent {

  employee = {
    username: '',
    work_location_code: ''
  };
  resultresponse: any;
  result: any;
isProcessing: any;
  constructor(private oneapiservice: OneApiServicesService) { }
  onSubmit(): void {
    if (this.employee.username.trim() === '' || this.employee.work_location_code.trim() === '') {
      alert('Please enter all the fields');
      return;
    }
    this.oneapiservice.updateWorkLocationbyadmin(this.employee).subscribe({
      next: (response) => {
        this.result=response.msg;
        this.isProcessing=true;
      },
      error: (errors) => {
        this.result = errors.error.msg
        this.isProcessing=false;
      }
    });
  }
  resetForm(): void {
    this.employee = {
      username: '',
      work_location_code: ''
    };
  }
}
