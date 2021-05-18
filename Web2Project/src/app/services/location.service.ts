import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl = 'https://localhost:44326/api/location';

  constructor(private http: HttpClient) { }

  getAllLocations():Observable<Location[]>{
    return this.http.get<Location[]>(this.baseUrl);
  }

}
