import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PcSummary} from "../model/pc-summary";
import {PcDetail} from "../model/pc-detail";
import {PcDetailImg} from "../model/pc-detail-img";
import {Observable} from "rxjs/Observable";
import {GoodsDetailService} from "./goods-detail.service";
import 'rxjs/add/operator/switchMap'

@Injectable()
export class GoodsDetailResolverService implements Resolve<PcDetail> {

  constructor(private goodsDetailService: GoodsDetailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcDetail> {
    return this.goodsDetailService.getPcDetail(route.params['pcCode']);
  }
}
