import { Injectable } from '@angular/core';
import {UserInfo} from "../model/user-Info";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AuthService} from "./auth.service";
import "rxjs/operators/publishLast";
import "rxjs/operators/refCount";

const UNKNOWN_USER: UserInfo = {
  id: '',
  pw: '',
  name: '',
  phone: '',
  address: '',
  email: ''
};

@Injectable()
export class UserService {

  private idDupCheckSubject = new BehaviorSubject<boolean>(false);
  idDupCheck$: Observable<boolean> = this.idDupCheckSubject.asObservable();

  private userInfoSubject = new BehaviorSubject<UserInfo>(UNKNOWN_USER);
  userInfo$: Observable<UserInfo> = this.userInfoSubject.asObservable();

  constructor(private _http: HttpClient, private authService: AuthService) { }

  register(user: UserInfo) {
    return this._http.post('/api/auth/register', user);
  }

  getId(id: string) {
    return this._http.post<boolean>('/api/user/getId', id)
      .do(data => this.idDupCheckSubject.next(data))
      .first();
  }

  getUserInfo(): Observable<UserInfo>{
    return this._http.get<UserInfo>('/api/user/getUserInfo', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['token'])
    })
      .do(data => this.userInfoSubject.next(data))
      .publishLast().refCount();
  }

  updateUserInfo(user: UserInfo) {
    return this._http.post<boolean>('/api/user/updateUserInfo', user, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['token'])
    });
  }
}
