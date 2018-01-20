import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {GoodsAddComponent} from "./admin/goods-add/goods-add.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'goodsadd', component: GoodsAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
