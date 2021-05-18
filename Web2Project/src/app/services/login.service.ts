import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  decodedToken: any;
  userToken: any;
  jwtHelper = new JwtHelperService();

  baseUrl = 'https://localhost:44326/api/login';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl, model).pipe(
      map((response: any) => {
        const user = response;
        console.log(user);
        if (user) {
          localStorage.setItem('token', user.tokenString);
          this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
          this.userToken = user.tokenString;
          localStorage.setItem('type', user.userType);
          localStorage.setItem('email', user.email);
          localStorage.setItem('id', user.userId);
        }
      })
    );
  }

}
