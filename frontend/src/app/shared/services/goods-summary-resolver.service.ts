import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PcSummary} from "../model/pc-summary";
import {Observable} from "rxjs/Observable";
import {GoodsDetailService} from "./goods-detail.service";

@Injectable()
export class GoodsSummaryResolverService implements Resolve<PcSummary>{

  constructor(private goodsDetailService: GoodsDetailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcSummary> {
    return this.goodsDetailService.getPcSummary(route.params['pcCode']);
  }
}
