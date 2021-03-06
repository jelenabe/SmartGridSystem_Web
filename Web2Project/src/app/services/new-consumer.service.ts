import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewConsumerService {

baseUrl = 'https://localhost:44326/api/consumers';

constructor(private http: HttpClient) { }

save(model: any){
  console.log('Method save from new-consumerService worked!');
  return this.http.post(this.baseUrl, model);
}

getConsumers(){
  return this.http.get(this.baseUrl);
}

deleteConsumer(Id: number){
  return this.http.delete(this.baseUrl+'/'+Id);
}
getConsumer(Id: number){
  return this.http.get(this.baseUrl+'/'+Id);
}

saveChange(model:any){
  return this.http.put(this.baseUrl+'/'+model.Id, model);
}
}
