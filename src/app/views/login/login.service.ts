import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated:boolean = false;

  constructor(private http: HttpClient) { }

  authenticate(credentials , callback){
    if(credentials){
      this.http.get
    }
    return callback && callback();
  }
}
