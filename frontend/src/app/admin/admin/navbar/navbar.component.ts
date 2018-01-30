import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginCheck: boolean = false;
  adminCheck: boolean = false;


  constructor( private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.getToken()) {
      this.loginCheck = true;
    } else {
      this.loginCheck = false;
    }
    this.adminCheck = this.authService.isAdmin();
  }

  logOut() {
    this.authService.logOut();
    this.loginCheck = false;
    this.adminCheck = false;
  }
}
