import { Component } from '@angular/core';
import { OneApiServicesService } from '../one-ui/MyApiServices/one-api-services.service';
import { AuthServicesService } from '../one-ui/MyApiServices/auth-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-login',
  templateUrl: './one-login.component.html',
  styleUrls: ['./one-login.component.css']
})
export class OneLoginComponent {
constructor(private authService:AuthServicesService,private router:Router,private oneApiServices:OneApiServicesService){}
userinfor={username:'',password:''};
respose_msg:any;
  userLogin() {
    this.oneApiServices.userLogin(this.userinfor).subscribe({
      next: (response) => {
        this.respose_msg = response.msg;
        localStorage.setItem('access_token', response.access_token);
        // this.router.navigate(['oneadmin/dashboard']);
        this.router.navigate(['one-control-dashboard']);
      },
      error: (error) => {
        this.respose_msg = error.error.msg;
      }
    });


    
  }
}
