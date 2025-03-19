import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillserviceesService {
  baseUrl = ' http://127.0.0.1:443/village_mapping/v1/api';

  constructor(private http: HttpClient) { }
  getparliyaments(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getparliamentconstituencies');
  }  
  getassemblies(parliament_name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getassemblyconstituencies?parliament_name=${parliament_name}`);
  }
  getdistricts(parliament_name: string, assembly_name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getdistricts?parliament_name=${parliament_name}&assembly_name=${assembly_name}`);
  }
  getsubdistricts(parliament_name: string, assembly_name: string, district_name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getsubdistricts?parliament_name=${parliament_name}&assembly_name=${assembly_name}&district_name=${district_name}`);
  }
  getlocalbodys(parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getlocalbodies?parliament_name=${parliament_name}&assembly_name=${assembly_name}&district_name=${district_name}&subdistrict_name=${subdistrict_name}`);
  }

  getvillages(parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string, localbody_name: string): Observable<any> {
     return this.http.get<any>(`${this.baseUrl}/getvillages?parliament_name=${parliament_name}&assembly_name=${assembly_name}&district_name=${district_name}&subdistrict_name=${subdistrict_name}&localbody_name=${localbody_name}`);
  }

  getLocationCodes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get-location-code');
  }
  getgroupno(loc_code: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/getgroups?loc_code=${loc_code}`);
  }
  getdairyno(loc_code: string, group_no: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/getdairies?loc_code=${loc_code}&group_no=${group_no}`);
  }
  getconsuerlist(loc_code: string,group_no: string, dairy_no: string ): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/get_unmapped_consumers?loc_code=${loc_code}&group_no=${group_no}&dairy_no=${dairy_no}`);
  }

  updateindexingconsumers(consumer_nos: string[]): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/add_bulk_mapped_consumer', { consumer_nos });
  }

  getMappedConsumers(loc_code: string,group_no: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get_mapped_consumers?loc_code=${loc_code}&group_no=${group_no}`);
  }
  getMappedconsumersforedit(loc_code: string, group_no: string, parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string, localbody_name: string, village_name: string): Observable<any> {
    let params = new HttpParams()
      .set('loc_code', loc_code)
      .set('group_no', group_no)
      .set('parliament_name', parliament_name)
      .set('assembly_name', assembly_name)
      .set('district_name', district_name)
      .set('subdistrict_name', subdistrict_name)
      .set('localbody_name', localbody_name)
      .set('village_name', village_name);
    return this.http.get<any>(this.baseUrl + '/get_mapped_consumersforedit', { params });

  }
  updateMappedConsumers(consumers: any[]): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(this.baseUrl + '/update_existing_mappedconsumer', consumers, { headers });
  }

}
