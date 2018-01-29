import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsShopComponent } from './goods-shop/goods-shop.component';
import { GoodsListComponent } from './goods-shop/goods-list/goods-list.component';
import { GoodsDetailComponent } from './goods-shop/goods-detail/goods-detail.component';
import { NavbarComponent } from './goods-shop/navbar/navbar.component';
import { SidebarComponent } from './goods-shop/goods-list/sidebar/sidebar.component';
import { ListComponent } from './goods-shop/goods-list/list/list.component';
import {GoodsRoutingModule} from "./goods-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ImageGalleryComponent } from './goods-shop/goods-list/image-gallery/image-gallery.component';
import { DetailImageComponent } from './goods-shop/goods-detail/detail-image/detail-image.component';
import {SharedModule} from "../shared/shared/shared.module";


@NgModule({
  imports: [
    CommonModule, GoodsRoutingModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  declarations: [GoodsShopComponent, GoodsListComponent, GoodsDetailComponent, NavbarComponent, SidebarComponent,
    ListComponent, ImageGalleryComponent, DetailImageComponent,],
  providers: []
})
export class GoodsModule { }
