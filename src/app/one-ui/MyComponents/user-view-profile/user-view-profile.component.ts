import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view-profile',
  templateUrl: './user-view-profile.component.html',
  styleUrls: ['./user-view-profile.component.css']
})
export class UserViewProfileComponent {

<<<<<<< HEAD
  user: any = {};

  constructor(private http: HttpClient, private oneapisevices:OneApiServicesService) {}
   
  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
  this.oneapisevices.viewuserprofile_db().subscribe({
    next: (response) => {
      this.user = response.msg;
    },
    error:(errors)=>{
      
      this.user = errors.error.msg

    }
  });
  }
=======
>>>>>>> parent of cfd6709 (admin login created)
}
