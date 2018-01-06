import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {PcSummary} from "../model/pc-summary";
import {PcDetail} from "../model/pc-detail";
import {PcDetailImg} from "../model/pc-detail-img";
import 'rxjs/add/operator/first'

@Injectable()
export class GoodsDetailService {

  constructor(private _http: HttpClient) { }

  getPcSummary(pcCode: string): Observable<PcSummary> {
    return this._http.get<PcSummary>('api/goods/detail/' + pcCode + '/summary')
      .first();
  }

  getPcDetail(pcCode: string): Observable<PcDetail> {
    return this._http.get<PcDetail>('api/goods/detail/' + pcCode + '/show')
      .first();
  }

  getPcDetailImg(pcCode: string): Observable<PcDetailImg> {
    return this._http.get<PcDetailImg>('api/goods/detail/' + pcCode + '/img')
      .first();
  }
}
