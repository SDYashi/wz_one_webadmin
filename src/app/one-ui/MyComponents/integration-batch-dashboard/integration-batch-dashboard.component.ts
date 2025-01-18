import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integration-batch-dashboard',
  templateUrl: './integration-batch-dashboard.component.html',
  styleUrls: ['./integration-batch-dashboard.component.css']
})
export class IntegrationBatchDashboardComponent {  
 
  isModalOpen = false;
  constructor(private router: Router) {}
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  onConfirm() {
    this.isModalOpen = false;
    this.router.navigate(['/oneadmin/db-batch-console-create-user']);
  }
  redirect_to_insertuserfrommpwzusers(){
    this.router.navigate(['/oneadmin/db-batch-console-create-user']);
  }
  
  redirect_to_insertuserfromPowerBiWarehouse(){
    this.router.navigate(['/oneadmin/db-batch-console-fetch-users-frompowerbi']);
  }
}
