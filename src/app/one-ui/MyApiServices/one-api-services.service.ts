import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/static_variables';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OneApiServicesService {

  private baseUrl = `${API_BASE_URL}`
  constructor(private http:HttpClient){}

  userLogin(data: { username: string; password: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/login', data);
  }


}
