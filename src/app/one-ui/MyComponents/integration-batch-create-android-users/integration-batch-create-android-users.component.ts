import { Component, OnInit } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-integration-batch-create-android-users',
  templateUrl: './integration-batch-create-android-users.component.html',
  styleUrls: ['./integration-batch-create-android-users.component.css']
})
export class IntegrationBatchCreateAndroidUsersComponent{
  // response_status: any = null; 
  isProcessing = false;
  result: any;
  constructor(private oneapiservices: OneApiServicesService) {}
  ngOnInit(): void {
    this.insert_userfrom_mpwzuser_oneapp();
  }

  insert_userfrom_mpwzuser_oneapp() {    
    this.isProcessing = true;
    this.oneapiservices.insertUserfrom_mmpwzuser().subscribe({
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
}
