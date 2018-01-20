import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {GoodsDetailService} from "./shared/services/goods-detail.service";
import {GoodsListService} from "./shared/services/goods-list.service";
import {GoodsSummaryResolverService} from "./shared/services/goods-summary-resolver.service";
import {GoodsDetailResolverService} from "./shared/services/goods-detail-resolver.service";
import {GoodsDetailImgResolverService} from "./shared/services/goods-detail-img-resolver.service";
import {AuthService} from "./shared/services/auth.service";
import {CanActivateAuthGuardService} from "./shared/services/can-activate-auth-guard.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, GoodsListService, GoodsDetailService,
    GoodsSummaryResolverService, GoodsDetailResolverService, GoodsDetailImgResolverService, AuthService,
    CanActivateAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
