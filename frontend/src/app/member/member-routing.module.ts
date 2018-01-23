import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./member/login/login.component";
import {MemberComponent} from "./member/member.component";
import {RegisterComponent} from "./member/register/register.component";
import {DashboardComponent} from "./member/dashboard/dashboard.component";
import {CanActivateUserAuthGuardService} from "../shared/services/can-activate-user-auth-guard.service";

const routes: Routes = [
  {path: '', component: MemberComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateUserAuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
