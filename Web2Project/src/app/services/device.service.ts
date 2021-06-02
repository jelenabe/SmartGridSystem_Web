import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device, SearchDevices } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl = 'https://localhost:44326/api/device';

  constructor(private http: HttpClient) { }
  
  getAllDevices():Observable<Device[]>{
    return this.http.get<Device[]>(this.baseUrl);
  }

  getDeviceById(id:number):Observable<Device>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.get<Device>(url);
  }

  createNewDevice(device:Device):Observable<Device>{
    console.log(device);
    return this.http.post<Device>(this.baseUrl, device);
  }

  updateDevice(device: Device):Observable<Device>{
    return this.http.put<Device>(this.baseUrl, device);
  }

  deleteDevice(id:number):Observable<{}>{
    let url = this.baseUrl.concat(`/${id}`);
    return this.http.delete(url);
  }

  searchAllDevices(searchObject: SearchDevices):Observable<Device[]>{
    console.log(searchObject);
    let url = this.baseUrl.concat("/search");
    return this.http.post<Device[]>(url, searchObject);
  }

}
