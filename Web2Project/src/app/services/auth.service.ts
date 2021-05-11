import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedToken: any;
  userToken: any;
  jwtHelper = new JwtHelperService();

baseUrl = 'https://localhost:44326/api/auth';

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
register(model: any)
{
  return this.http.post(this.baseUrl, model);
}

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      console.log(user);
      if (user) {
        localStorage.setItem('token', user.tokenString);
        this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
        this.userToken = user.tokenString;
        localStorage.setItem('type', user.UserType);
        localStorage.setItem('username', user.Email);
        localStorage.setItem('id', user.UserId);
      }
    })
  );
}

}
