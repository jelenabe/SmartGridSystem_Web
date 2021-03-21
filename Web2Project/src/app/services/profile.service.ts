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
}
