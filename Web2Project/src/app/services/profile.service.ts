import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'https://localhost:44326/api/profile';

constructor(private http: HttpClient) { }

applyChanges(model: any)
{
    return this.http.post(this.baseUrl, model);
  

}
 getUser(){
  return this.http.get(this.baseUrl);
 }
getInactiveProfiles()
{
  console.log("getInactiveEvents method form profile service called")
}

activateProfile(id: any){
  console.log("activateProfile method form profile service called")
}

deleteProfile(id: any)
{
  console.log("DeleteProfile method from Profile serviced called")
}
}
