import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { RegGoodsComponent } from './admin/reg-goods/reg-goods.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CodeValidator, NumberValidator} from "./admin/reg-goods/reg-goods-validator.directive";
import {SharedModule} from "../shared/shared/shared.module";
import { RegUpdateComponent } from './admin/reg-update/reg-update.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AdminComponent, NavbarComponent, RegGoodsComponent, CodeValidator, NumberValidator, RegUpdateComponent]
})
export class AdminModule { }
