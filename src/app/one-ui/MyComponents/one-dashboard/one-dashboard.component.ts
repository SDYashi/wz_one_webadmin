import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../MyApiServices/auth-services.service';
import { OneApiServicesService } from '../../MyApiServices/one-api-services.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-one-dashboard',
  templateUrl: './one-dashboard.component.html',
  styleUrls: ['./one-dashboard.component.css']
})
export class OneDashboardComponent {
  activeUsersCount: number | null = null;
  total_api_hits: number | null = null;
  dashboardstatuswiseData: any = null;
  dashboardstatusCount: any = null;
  dashboardtotalCount: number | null = null;
  respose_msg:any;
  recentActions: any[] = [];
  constructor(private authService:AuthServicesService,private router:Router,private oneApiServices:OneApiServicesService){}

  ngOnInit(): void {
    this.loadActiveUsersCount();
    this.loadDashboardStatuswiseNotify();
    this.loadStatusWiseNotifyCount();
    this.loadapihitsCount();
    this.loadRecentActionDoneHistory();
  }
  loadActiveUsersCount(): void {
    this.oneApiServices.getActiveUsersCount().subscribe(
     {
      next: (response) => {
        this.activeUsersCount = response;
      },
      error: (error) => {
        this.respose_msg = error.error.msg;
      }
   });
  }
  loadDashboardStatuswiseNotify(): void {
    this.oneApiServices.getDashboardStatuswiseCountData().subscribe({
      next: (response) => {
        this.dashboardstatuswiseData = response;
      },
      error: (error) => {
        this.respose_msg = error.error.msg;
      }
    }); 
  }
  loadStatusWiseNotifyCount(): void {
    this.oneApiServices.getStatusWiseNotifyCount().subscribe({        
      next: (response) => {
        this. dashboardstatusCount = response.status_count;
        this. dashboardtotalCount = response.total_count;
      },
      error: (error) => {
        this.respose_msg = error.error.msg;
      }
      }
    );
  }
  loadapihitsCount(): void {
    this.oneApiServices.getStatusapihitcounts().subscribe(
     {
      next: (response) => {
        this.total_api_hits = response;
      },
      error: (error) => {
        this.respose_msg = error.error.msg;
      }
   });
  }
  loadRecentActionDoneHistory(): void {
    this.oneApiServices.getRecentActionDoneHistory().subscribe(
      {
        next: (response) => {
          this.recentActions = response;
        },
        error: (error) => {
          this.respose_msg = error.error.msg;
        }
      }
    );
  }

}
