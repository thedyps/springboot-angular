import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {PcDetailImg} from "../model/pc-detail-img";
import {Observable} from "rxjs/Observable";
import {GoodsDetailService} from "./goods-detail.service";

@Injectable()
export class GoodsDetailImgResolverService implements Resolve<PcDetailImg>{

  constructor(private goodsDetailService: GoodsDetailService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PcDetailImg> {
    return this.goodsDetailService.getPcDetailImg(route.params['pcCode']);
  }
}
