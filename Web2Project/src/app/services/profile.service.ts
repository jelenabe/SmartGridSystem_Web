import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http: HttpClient) { }

applyChanges(model: any)
{
  console.log('method applyChanges form profile service called!');
  return model;
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
