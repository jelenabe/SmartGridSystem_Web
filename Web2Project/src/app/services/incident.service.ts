import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';
import { Incident } from '../models/incident';
import { Resolution } from '../models/resolution';

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

getIncidentDevices(incidentId: number):Observable<Device[]>{
  let url = this.baseUrl.concat(`/${incidentId}/devices`);
  return this.http.get<Device[]>(url);
}

addOneDeviceToIncident(incidentId: number, deviceId: number):Observable<Incident>{
  let incident: Incident = new Incident();
  let url = this.baseUrl.concat(`/${incidentId}/device/${deviceId}`);
  return this.http.post<Incident>(url, incident);  // ?!
}

getAllUnconnectedDevices():Observable<Device[]>{
  let url = this.baseUrl.concat(`/unconnectedDevices`);
  return this.http.get<Device[]>(url);
}  

removeOneDeviceFromIncident(incidentId: number, deviceId: number):Observable<Incident>{
  let url = this.baseUrl.concat(`/${incidentId}/removeDevice/${deviceId}`);
  return this.http.put<Incident>(url, "");  //  ?!
}

newResolutionForIncident(incidentId: number, resolution: Resolution):Observable<Incident>{
  let url = this.baseUrl.concat(`/${incidentId}/addResolution`);
  return this.http.put<Incident>(url, resolution);
}

getResolutionFromIncidentById(incidentId:number):Observable<Resolution>{
  let url = this.baseUrl.concat(`/${incidentId}/getResolution`);
  return this.http.get<Resolution>(url);
}

getMineIncidents(logUserId:number):Observable<Incident[]>{
  let url = this.baseUrl.concat(`/${logUserId}/getMineIncidents`);
  return this.http.get<Incident[]>(url);
}


}
