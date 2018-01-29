import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

const baseUrl = 'api/admin/regGoods/';
@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', baseUrl+'imageUpload', formdata, {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken()['token']),
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

}
