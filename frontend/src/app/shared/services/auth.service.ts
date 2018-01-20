import { Injectable } from '@angular/core';
import {Login} from "../model/login";
import {AuthInfo} from "../model/auth-info";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(login: Login): Observable<boolean> {
    return this._http.post<boolean>('/api/auth/login', login)
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

  getToken(): string {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    return token ? token : "";
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
  }


  showUserInformation(token: string): Observable<AuthInfo> {
    return this._http.get<AuthInfo>('/api/user', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    })
  }

}
