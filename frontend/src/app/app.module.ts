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
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from "./shared/services/messages.service";
import {UserService} from "./shared/services/user.service";
import {CanActivateUserAuthGuardService} from "./shared/services/can-activate-user-auth-guard.service";
import {CanActivateAdminAuthGuardService} from "./shared/services/can-activate-admin-auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, GoodsListService, GoodsDetailService,
    GoodsSummaryResolverService, GoodsDetailResolverService, GoodsDetailImgResolverService, AuthService,
    CanActivateUserAuthGuardService, CanActivateAdminAuthGuardService, MessagesService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
