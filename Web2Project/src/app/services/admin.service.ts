import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';
import { Field } from '../models/field';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'https://localhost:44326/api/admin';

  constructor(private http: HttpClient) { }

applyPriority(model: any)
{
  return this.http.put(this.baseUrl + '/'+'street', model);
}

fieldSettings(model:any)
{
  return this.http.put(this.baseUrl+'/'+'field', model);  
  
}

notificationSettings(id: number, model: any)
{
  return this.http.put(this.baseUrl + '/' + id, model);
}

resetAll(){
  return this.http.get(this.baseUrl+'/'+'reset');
}

getFileds():Observable<Field>{
  return this.http.get<Field>(this.baseUrl + '/'+'fields');
}
getNotif(){
  return this.http.get(this.baseUrl + '/'+'notifications');
}

}
