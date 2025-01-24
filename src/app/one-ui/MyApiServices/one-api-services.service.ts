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
   
  


  createUserinfor_foremail (user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/admin/add-admin-details', user);
  }


}
