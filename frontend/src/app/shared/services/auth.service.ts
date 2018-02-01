import { Injectable } from '@angular/core';
import {Login} from "../model/login";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/do';
import * as JWT from "jwt-decode"
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/publishLast';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(login: Login) {
    return this._http.post('/api/auth/login', login)
      .do(res => {
        let token = res['token'];
        console.log(token);
        if(token) {
          localStorage.setItem('currentUser', JSON.stringify({username: login.id, token: token}));
          return true;
        } else {
          return false;
        }
      })
  }

  isExist(login: Login): Observable<boolean> {
    return this._http.post<boolean>('/api/auth/isExist', login, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken()['token'])})
      .publishLast().refCount();
  }

  getToken(): string {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    return token ? token : "";
  }

  isAdmin(): boolean {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    let decodeToken;
    let adminCheck: boolean = false;
    if(token) {
      decodeToken = JWT(token['token']);
      for(var key in decodeToken.authority) {
        var obj = decodeToken.authority[key];
        if(obj['authority'] === 'ROLE_ADMIN') {
          adminCheck = true;
        }
      }
    }
    return adminCheck;
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }
}
