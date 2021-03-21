import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkPlanService {

constructor(private hhtp: HttpClient) { }


  // tslint:disable-next-line: typedef
  save(model: any){
    console.log('Method save from workPlanService worked!');
    return model;
  }
}

