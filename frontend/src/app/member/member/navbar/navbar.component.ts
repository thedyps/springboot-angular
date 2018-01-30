import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  adminCheck: boolean = false;


  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.adminCheck = this.authService.isAdmin();
  }

  logOut() {
    this.authService.logOut();
    this.adminCheck = false;
  }
}
