import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl = 'https://localhost:44326/api/user';

constructor(private http: HttpClient) { }

getInactiveProfiles(){
  return this.http.get(this.baseUrl);
}

ActivateUser(id: number){
  return this.http.put(this.baseUrl + '/' + id, id);
}

DeleteUser(id: number){
  return this.http.delete(this.baseUrl + '/' + id);
}


}
