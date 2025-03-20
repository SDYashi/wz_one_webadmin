import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillserviceesService {
  baseUrl = 'http://127.0.0.1:443/village_mapping/v1/api';

  constructor(private http: HttpClient) { }

  getparliyaments(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getparliamentconstituencies');
  }

  getassemblies(parliament_name: string): Observable<any> {
    const params = new HttpParams().set('parliament_name', parliament_name);
    return this.http.get<any>(`${this.baseUrl}/getassemblyconstituencies`, { params });
  }

  getdistricts(parliament_name: string, assembly_name: string): Observable<any> {
    const params = new HttpParams()
      .set('parliament_name', parliament_name)
      .set('assembly_name', assembly_name);
    return this.http.get<any>(`${this.baseUrl}/getdistricts`, { params });
  }

  getsubdistricts(parliament_name: string, assembly_name: string, district_name: string): Observable<any> {
    const params = new HttpParams()
      .set('parliament_name', parliament_name)
      .set('assembly_name', assembly_name)
      .set('district_name', district_name);
    return this.http.get<any>(`${this.baseUrl}/getsubdistricts`, { params });
  }

  getlocalbodys(parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string): Observable<any> {
    const params = new HttpParams()
      .set('parliament_name', parliament_name)
      .set('assembly_name', assembly_name)
      .set('district_name', district_name)
      .set('subdistrict_name', subdistrict_name);
    return this.http.get<any>(`${this.baseUrl}/getlocalbodies`, { params });
  }

  getvillages(parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string, localbody_name: string): Observable<any> {
    const params = new HttpParams()
      .set('parliament_name', parliament_name)
      .set('assembly_name', assembly_name)
      .set('district_name', district_name)
      .set('subdistrict_name', subdistrict_name)
      .set('localbody_name', localbody_name);
    return this.http.get<any>(`${this.baseUrl}/getvillages`, { params });
  }

  getLocationCodes(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getlocationcode');
  }

  getgroupno(loc_code: string): Observable<any> {
    const params = new HttpParams().set('loc_code', loc_code);
    return this.http.get<any>(this.baseUrl + '/getgroups', { params });
  }

  getdairyno(loc_code: string, group_no: string): Observable<any> {
    const params = new HttpParams()
      .set('loc_code', loc_code)
      .set('group_no', group_no);
    return this.http.get<any>(this.baseUrl + '/getdairies', { params });
  }

  getconsuerlist(loc_code: string, group_no: string, dairy_no: string): Observable<any> {
    const params = new HttpParams()
      .set('loc_code', loc_code)
      .set('group_no', group_no)
      .set('dairy_no', dairy_no);
    return this.http.get<any>(this.baseUrl + '/get_unmapped_consumers', { params });
  }

  updateindexingconsumers(consumer_nos: string[]): Observable<any> {
    const params = new HttpParams().set('consumer_nos', consumer_nos.join(','));
    return this.http.post<any>(this.baseUrl + '/add_bulk_mapped_consumer', {}, { params });
  }

  getMappedConsumers(loc_code: string, group_no: string): Observable<any> {
    const params = new HttpParams()
      .set('loc_code', loc_code)
      .set('group_no', group_no);
    return this.http.get<any>(`${this.baseUrl}/get_mapped_consumers`, { params });
  }

  getMappedconsumersforedit(loc_code: string, group_no: string, parliament_name: string, assembly_name: string, district_name: string, subdistrict_name: string, localbody_name: string, village_name: string): Observable<any> {
    const params = new HttpParams()
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

  updateMappedConsumers(data: { consumers: any[] }): Observable<any> {
    const params = new HttpParams().set('consumers', JSON.stringify(data.consumers));
    return this.http.put<any>(this.baseUrl + '/update_existing_mappedconsumer', {}, { params });
  }
  
  getDashboardSummary(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get_dashboardsummary');
  }
}

