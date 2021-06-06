import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkRequest } from '../models/work-request';

@Injectable({
  providedIn: 'root'
})
export class WorkRequestService {

  baseUrl = 'https://localhost:44326/api/workRequest';

  constructor(private http: HttpClient) { }

  getMineRequest(userId: number):Observable<WorkRequest[]>{
    let url = this.baseUrl.concat(`/mineRequests/${userId}`);
    return this.http.get<WorkRequest[]>(url);
  }

  getAllRequests():Observable<WorkRequest[]>{
    return this.http.get<WorkRequest[]>(this.baseUrl);
  }

  getWorkRequestById(id:number):Observable<WorkRequest>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.get<WorkRequest>(url);
  }

  createNewWorkRequest(workRequest:WorkRequest):Observable<WorkRequest>{
    console.log(workRequest);
    return this.http.post<WorkRequest>(this.baseUrl, workRequest);
  }

  updateWorkRequest(workRequest: WorkRequest):Observable<WorkRequest>{
    return this.http.put<WorkRequest>(this.baseUrl, workRequest);
  }

  deleteWorkRequest(id:number):Observable<{}>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.delete(url);
  }

}
