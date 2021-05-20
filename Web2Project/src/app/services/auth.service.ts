import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'https://localhost:44326/api/auth';

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
register(model: any)
{
  return this.http.post(this.baseUrl, model);
}

changePassword(id: any, odlPassword: any, newPassword: any) {
  const newModel: any = {};
  newModel.OldPassword = odlPassword;
  newModel.NewPassword = newPassword;
  return this.http.put(this.baseUrl + '/' + id, newModel);
}


}
