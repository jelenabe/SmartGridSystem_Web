import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportOutageService {

constructor(private hhtp: HttpClient) { }

report(model: any){
  console.log('Method report from reportOutageService worked!');
  return model;
}

}
