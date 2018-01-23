import { Component, OnInit } from '@angular/core';
import {GoodsListService, UNKNOWN_SEARCH_DATA} from "../../../shared/services/goods-list.service";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginCheck: boolean = false;
  adminCheck: boolean = false;

  constructor(private goodsListService: GoodsListService, private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.getToken()) {
      this.loginCheck = true;
    } else {
      this.loginCheck = false;
    }
    this.adminCheck = this.authService.isAdmin();
  }

  typeChange(pcType: string) {
    this.goodsListService.setFilterData(UNKNOWN_SEARCH_DATA);
    this.goodsListService.loadSpecificPage(pcType, 1).map(data => data[0]).subscribe(
      () => {}
    );
    this.goodsListService.loadSpecificPage(pcType, 1).map(data => data[1]).subscribe(
      () => {}
    );
  }

  logOut() {
    this.authService.logOut();
    this.loginCheck = false;
    this.adminCheck = false;
  }
}
