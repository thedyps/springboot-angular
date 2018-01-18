import { Component, OnInit } from '@angular/core';
import {GoodsListService, UNKNOWN_SEARCH_DATA} from "../shared/services/goods-list.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private goodsListService: GoodsListService) { }

  ngOnInit() {
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
}
