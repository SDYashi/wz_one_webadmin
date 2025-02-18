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

  createUserinfor_foremail (user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }  
  
  insertUserfrom_mmpwzuser(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/admin/add-admin-details');
  }
  insertUserfrom_powerbiwarehouse(): Observable<any> {
    return this.http.get<any>(this.baseUrl+'/admin/add-admin-details');
  }
  submitAddAppName(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }
  submitNotificationStatus(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }
  viewalluserprofile_db(page_no: any, page_size: any) {
    return this.http.get<any>(this.baseUrl+'/android/view-all-user-profiles/'+page_no+'/'+page_size);
  }
  viewuserprofile_db() {
    return this.http.get<any>(this.baseUrl+'/android/view-user-profile');
  }
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }
  
  


}
