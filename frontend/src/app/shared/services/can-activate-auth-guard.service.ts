import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class CanActivateAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.getToken()) {
      console.log('존재한다')
      return true
    } else {
      console.log('존재하지 않는다')

      this.router.navigate(['/member/login']);
      return false;
    }
  }
}
