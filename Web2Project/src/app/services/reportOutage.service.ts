import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportOutageService {

  baseUrl = 'https://localhost:44326/api/report';

constructor(private http: HttpClient) { }

report(model: any){
 return this.http.post(this.baseUrl, model);
}

}
