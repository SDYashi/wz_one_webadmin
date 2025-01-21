import { Component } from '@angular/core';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';

@Component({
  selector: 'app-integration-batch-fetch-usersfrom-powerbi',
  templateUrl: './integration-batch-fetch-usersfrom-powerbi.component.html',
  styleUrls: ['./integration-batch-fetch-usersfrom-powerbi.component.css']
})
export class IntegrationBatchFetchUsersfromPowerbiComponent {


  // response_status: any = null; 
  isProcessing = false;
  result: any;
  constructor(private oneapiservices: OneApiServicesService) {}
  ngOnInit(): void {
    this.insert_userfrom_powerbi_oneapp();
  }

  insert_userfrom_powerbi_oneapp() {    
    this.isProcessing = true;
    this.oneapiservices.insertUserfrom_powerbiwarehouse().subscribe({
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
