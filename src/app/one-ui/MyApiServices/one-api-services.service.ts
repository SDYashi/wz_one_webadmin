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
    return this.http.post(this.baseUrl + '/android/login-admin', data);
  }
  getActiveUsersCount(): Observable<number> {
    return this.http.get<{ total_users: number }>(this.baseUrl+'/android/dashboard-active-users-count').pipe(
      map(response => response.total_users) // Extract total_users from the response
    );
  }
  getDashboardStatuswiseCountData(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/android/dashboard-total-notify-count').pipe(
      map(response => response) 
    );
  }
  getStatusWiseNotifyCount(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/android/dashboard-statuswise-notify-count').pipe(
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

  submitNotificationStatus(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/notify-status', data);
  }   

  submitAppButtonName(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/add-button-status', data);
  }

  submitAddAppName(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/notify-integrated-app', data);
  }   
  insertUserfrom_mmpwzuser(): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/insert-userlogininfo-from-mpwzusers',{});
  }
  
  insertUserfrom_powerbiwarehouse(): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/insert-userinfo-from-powerbi-warehouse',{});
  }
  
  viewuserprofile_db(): Observable<any> {
    return this.http.get(this.baseUrl+'/android/userprofile',{});
  }
  
  viewalluserprofile_db(page_no: number, page_size: number): Observable<any> {
    return this.http.get(this.baseUrl+'/android/userlist?page_no='+page_no+'&page_size='+page_size,{});
  }

  CreateintegrationAPIUser (userData: any): Observable<any> {
    return this.http.post(this.baseUrl+'/admin/shared-call/api/v1/create-integration-users',userData); 
  }
  changePasswordbyadmin(data: { username: string; new_password: string }): Observable<any> {
    return this.http.put(this.baseUrl+'/admin/change-password-byadminuser', data);
  }

  updateWorkLocationbyadmin(data: { username: string; work_location_code: string }): Observable<any> {
    return this.http.put(this.baseUrl+'/admin/update-work-location-foremployee', data);
  }

  createUserinfor_foremail (user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }


}
