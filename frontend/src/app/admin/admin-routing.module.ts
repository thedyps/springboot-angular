import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {RegGoodsComponent} from "./admin/reg-goods/reg-goods.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'reggoods', component: RegGoodsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
