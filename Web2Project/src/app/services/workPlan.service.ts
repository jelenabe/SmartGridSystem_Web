import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkPlan } from '../models/work-plan';

@Injectable({
  providedIn: 'root'
})
export class WorkPlanService {

baseUrl = 'https://localhost:44326/api/workPlan';

constructor(private http: HttpClient) { }

getMineRequest(userId: number):Observable<WorkPlan[]>{
  let url = this.baseUrl.concat(`/minePlans/${userId}`);
  return this.http.get<WorkPlan[]>(url);
}

getAllPlans():Observable<WorkPlan[]>{
  return this.http.get<WorkPlan[]>(this.baseUrl);
}

getWorkPlanById(id:number):Observable<WorkPlan>{
  let url = this.baseUrl.concat(`/${id}`);
  return this.http.get<WorkPlan>(url);
}

createNewWorkPlan(workPlan:WorkPlan):Observable<WorkPlan>{
  console.log(workPlan);
  return this.http.post<WorkPlan>(this.baseUrl, workPlan);
}

updateWorkPlan(workPlan: WorkPlan):Observable<WorkPlan>{
  return this.http.put<WorkPlan>(this.baseUrl, workPlan);
}

deleteWorkPlan(id:number):Observable<{}>{
  let url = this.baseUrl.concat(`/${id}`);
  return this.http.delete(url);
}

}

