import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import {GoodsAddComponent} from "./admin/goods-add/goods-add.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [GoodsAddComponent, AdminComponent]
})
export class AdminModule { }
