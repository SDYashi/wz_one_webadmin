import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-resetpassword',
  templateUrl: './user-resetpassword.component.html',
  styleUrls: ['./user-resetpassword.component.css']
})
export class UserResetpasswordComponent {

  user = {
    username: '',
    new_password: ''
  };
  result: any;
isProcessing: boolean = false;

  constructor(private oneService: OneApiServicesService) {}

  onSubmit(): void {
    if (this.user.username === '' || this.user.new_password === '') {
      alert('Please fill in all required fields');
      return;
    }

    this.oneService.changePasswordbyadmin(this.user).subscribe({
      next: (response) => {
        this.result = response.msg;
        this.isProcessing = true;
        this.resetForm();
      },
      error: (errors) => {
       this.result = errors.error.msg
        this.isProcessing = false;
      }
    });
  }

  resetForm(): void {
    this.user = {
      username: '',
      new_password: ''
    };
  }
}

