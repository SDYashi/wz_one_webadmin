import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-create-users',
  templateUrl: './user-create-users.component.html',
  styleUrls: ['./user-create-users.component.css']
})
export class UserCreateUsersComponent {
  user = {
    user_role: '',
    username: '',
    password: '', 
    work_location_code: ''
  };
  result: any;
  isProcessing = false;
  constructor(private oneapiservices: OneApiServicesService) {}

  onSubmit() {
    if (!this.user.user_role.trim() || !this.user.username.trim() || !this.user.password.trim() || !this.user.work_location_code.trim()){
      alert('Please fill all the required fields');
      return;
    }
    this.oneapiservices.CreateintegrationAPIUser(this.user).subscribe({
      next: (response) => {
        this.result = response.msg;
        this.isProcessing = true;
      },
      error: (errors) => {
        this.result = errors.error.msg;
        this.isProcessing = false;
      },
    });
  
  }

  resetForm() { 
    this.user.user_role = '';
    this.user.username = '';
    this.user.password = '';
    this.user.work_location_code = '';
  }

}
