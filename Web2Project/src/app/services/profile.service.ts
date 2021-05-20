import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'https://localhost:44326/api/user';

constructor(private http: HttpClient) { }

applyChanges(model: any)
{
    return this.http.put(this.baseUrl, model);
  

}
getUser(Id: number){
  return this.http.get(this.baseUrl+'/'+Id);
}

 getFile(path: string) {
  const obj: any = {};
  obj.Path = path;
  return this.http.post('https://localhost:44326/api/upload/get-image', obj);
}


}
