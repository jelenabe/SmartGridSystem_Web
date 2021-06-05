import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  baseUrl = 'https://localhost:44326/api/incidents';

  constructor(private http: HttpClient) { }

  getAllIncidents():Observable<Incident[]>{
    return this.http.get<Incident[]>(this.baseUrl);
  }

  getIncidentById(id:number):Observable<Incident>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.get<Incident>(url);
  }

  createNewIncident(incident:Incident):Observable<Incident>{
    console.log(incident);
    return this.http.post<Incident>(this.baseUrl, incident);
  }

  updateIncident(incident: Incident):Observable<Incident>{
    return this.http.put<Incident>(this.baseUrl, incident);
  }

  deleteIncident(id:number):Observable<{}>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.delete(url);
  }

  /*
  searchAllIncidents(searchObject: SearchIncidents):Observable<Incident[]>{
    console.log(searchObject);
    let url = this.baseUrl.concat("/search");
    return this.http.post<Incident[]>(url, searchObject);
  }
*/

  
}
