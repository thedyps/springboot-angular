import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoodsShopComponent} from "./goods-shop/goods-shop.component";
import {GoodsListComponent} from "./goods-shop/goods-list/goods-list.component";
import {GoodsDetailComponent} from "./goods-shop/goods-detail/goods-detail.component";
import {GoodsDetailResolverService} from "../shared/services/goods-detail-resolver.service";
import {GoodsSummaryResolverService} from "../shared/services/goods-summary-resolver.service";
import {GoodsDetailImgResolverService} from "../shared/services/goods-detail-img-resolver.service";

const routes: Routes = [
  {
    path: '', component: GoodsShopComponent,
    children: [
      {
        path: 'list/:pcType/:num',
        component: GoodsListComponent
      },
      {
        path: 'detail/:pcCode', component: GoodsDetailComponent,
        resolve: {
          summary: GoodsSummaryResolverService,
          detail: GoodsDetailResolverService,
          detailImg: GoodsDetailImgResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule {

}
