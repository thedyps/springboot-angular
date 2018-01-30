import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {RegGoodsComponent} from "./admin/reg-goods/reg-goods.component";
import {RegUpdateComponent} from "./admin/reg-update/reg-update.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'reggoods', component: RegGoodsComponent},
      {path: 'regupdate', component: RegUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
