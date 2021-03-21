import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
register(model: any)
{
  console.log('method register form auth service called!');
  return model;
}

}
