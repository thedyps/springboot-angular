import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsShopComponent } from './goods-shop/goods-shop.component';
import { GoodsListComponent } from './goods-shop/goods-list/goods-list.component';
import { GoodsDetailComponent } from './goods-shop/goods-detail/goods-detail.component';
import { NavbarComponent } from './goods-shop/navbar/navbar.component';
import { SidebarComponent } from './goods-shop/goods-list/sidebar/sidebar.component';
import { ListComponent } from './goods-shop/goods-list/list/list.component';
import {GoodsRoutingModule} from "./goods-routing.module";
import {GoodsListService} from "./shared/services/goods-list.service";
import {ForNumberPipe} from "../shared/pipes/for-number.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ImageGalleryComponent } from './goods-shop/goods-list/image-gallery/image-gallery.component';
import { DetailImageComponent } from './goods-shop/goods-detail/detail-image/detail-image.component';
import {GoodsDetailService} from "./shared/services/goods-detail.service";
import {GoodsDetailResolverService} from "./shared/services/goods-detail-resolver.service";
import {GoodsSummaryResolverService} from "./shared/services/goods-summary-resolver.service";
import {GoodsDetailImgResolverService} from "./shared/services/goods-detail-img-resolver.service";

@NgModule({
  imports: [
    CommonModule, GoodsRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [GoodsShopComponent, GoodsListComponent, GoodsDetailComponent, NavbarComponent, SidebarComponent, ListComponent, ForNumberPipe, ImageGalleryComponent, DetailImageComponent],
  providers: [GoodsListService, GoodsDetailService, GoodsSummaryResolverService, GoodsDetailResolverService, GoodsDetailImgResolverService]
})
export class GoodsModule { }
