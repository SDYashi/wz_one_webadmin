import { Component } from '@angular/core';

@Component({
  selector: 'app-integration-batch-create-android-users',
  templateUrl: './integration-batch-create-android-users.component.html',
  styleUrls: ['./integration-batch-create-android-users.component.css']
})
export class IntegrationBatchCreateAndroidUsersComponent {

<<<<<<< HEAD
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
=======
>>>>>>> parent of cfd6709 (admin login created)
}
