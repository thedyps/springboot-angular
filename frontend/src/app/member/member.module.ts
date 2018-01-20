import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { LoginComponent } from './member/login/login.component';
import { RegisterComponent } from './member/register/register.component';
import { DashboardComponent } from './member/dashboard/dashboard.component';
import { NavbarComponent } from './member/navbar/navbar.component';
import { MemberComponent } from './member/member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, DashboardComponent, NavbarComponent, MemberComponent]
})
export class MemberModule { }
