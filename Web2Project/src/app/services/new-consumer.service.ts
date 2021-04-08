import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewConsumerService {

constructor(private hhtp: HttpClient) { }

save(model: any){
  console.log('Method save from new-consumerService worked!');
  return model;
}

}
