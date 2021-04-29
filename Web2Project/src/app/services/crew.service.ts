import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  baseUrl = 'https://localhost:44326/api/crew';

constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUsers(){
    return this.http.get(this.baseUrl);
  }

  addCrew(model: any){
    return this.http.post(this.baseUrl, model);
  }

}
