import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-add-admin-user-infor',
  templateUrl: './user-add-admin-user-infor.component.html',
  styleUrls: ['./user-add-admin-user-infor.component.css']
})
export class UserAddAdminUserInforComponent {
  user = {
    app_source: '',
    employee_id: '',
    name: '',
    email: '',
    phone: ''
  };
  result: any;
  isProcessing: boolean = false;

  constructor(private oneApiServices: OneApiServicesService) {}

  onSubmit() {
    if (!this.user.app_source.trim() || !this.user.employee_id.trim() || !this.user.name.trim() || !this.user.email.trim() || !this.user.phone.trim()) {
      alert('Please fill all the required fields');
      return;
    }
    this.isProcessing = true;
    this.oneApiServices.createUserinfor_foremail(this.user).subscribe(
      {
        next: (response) => {
          this.result = response.msg;
          this.isProcessing = true;
        },
        error: (errors) => {
          this.result = errors.error.msg;
          this.isProcessing = false;
        }
      }
    );
  }

  resetForm() {
    this.user = {
      app_source: '',
      employee_id: '',
      name: '',
      email: '',
      phone: ''
    };
    this.result = null;
  }
}

