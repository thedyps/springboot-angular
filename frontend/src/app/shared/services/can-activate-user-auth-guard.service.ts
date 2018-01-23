import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {MessagesService} from "./messages.service";


@Injectable()
export class CanActivateUserAuthGuardService implements CanActivate  {

  constructor(private router: Router, private authService: AuthService, private messagesService: MessagesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    if(this.authService.getToken()) {
      return true
    } else {
      this.messagesService.error('로그인하지 않았습니다.');
      this.router.navigate(['/member/login']);
      return false;
    }
  }
}
