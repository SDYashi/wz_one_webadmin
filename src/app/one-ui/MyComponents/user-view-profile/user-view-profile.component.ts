import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-user-view-profile',
  templateUrl: './user-view-profile.component.html',
  styleUrls: ['./user-view-profile.component.css']
})
export class UserViewProfileComponent {

  user: any = {};

  constructor(private http: HttpClient, private oneapisevices:OneApiServicesService) {}
   
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
  this.oneapisevices.viewuserprofile_db().subscribe({
    next: (response) => {
      this.user = response;
    },
    error:(errors)=>{
      
      this.user = errors;

    }
  });
  }
}


