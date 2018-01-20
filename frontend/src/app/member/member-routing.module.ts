import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./member/login/login.component";
import {MemberComponent} from "./member/member.component";

const routes: Routes = [
  {path: '', component: MemberComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
