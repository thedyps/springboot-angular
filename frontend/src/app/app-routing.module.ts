import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'goods/list/All/1', pathMatch: 'full'},
  {path: 'goods', loadChildren: './goods/goods.module#GoodsModule'},
  {path: 'member', loadChildren: './member/member.module#MemberModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
