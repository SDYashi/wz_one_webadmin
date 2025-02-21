import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/static_variables';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OneApiServicesService {

  private baseUrl = `${API_BASE_URL}`
  constructor(private http:HttpClient){}
  
  userLogin(data: { username: string; password: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/android/login', data);
  }
  getActiveUsersCount(): Observable<number> {
    return this.http.get<{ total_users: number }>(this.baseUrl+'/android/dashboard-active-users-count').pipe(
      map(response => response.total_users) 
    );
  }
  getDashboardStatuswiseCountData(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/android/dashboard-total-notify-count').pipe(
      map(response => response) 
    );
  }
  getStatusWiseNotifyCount(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/android/admin-dashboard-statuswise-notify-count').pipe(
      map(response => response) 
    );
  }
  getStatusapihitcounts(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/android/dashboard-api-logs-hits-count').pipe(
      map(response => response.total_api_hits) 
    );
  }
  getRecentActionDoneHistory(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/android/dashboard-recent-actiondone-history').pipe(
      map(response => response));
  }  
  insertUserfrom_mmpwzuser(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/admin/insert-userlogininfo-from-mpwzusers');
  }
  insertUserfrom_powerbiwarehouse(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/admin/insert-userinfo-from-powerbi-warehouse');
  }
  submitAddAppName(AppName: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/notify-integrated-app', AppName);
  }
  submitNotificationStatus(notifystatus: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/notify-status', notifystatus);
  }
  submitButtonName(ButtonName: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-button-status', ButtonName);
  }  
  ChangePasswordbyAdmin(ButtonName: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/change-password-byadminuser', ButtonName);
  }
  viewalluserprofile_list(page_no: any, page_size: any) {
    return this.http.get<any>(this.baseUrl+'/android/userlist/'+page_no+'/'+page_size);
  }
  viewuserprofile() {
    return this.http.get<any>(this.baseUrl+'/android/userprofile');
  }
  createIntegrationUsers(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/shared-call/api/v1/create-integration-users', user);
  }  
  updateworklocation(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/update-work-location-foremployee', user);
  }
  
  


}
