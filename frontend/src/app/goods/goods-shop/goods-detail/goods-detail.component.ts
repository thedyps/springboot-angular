import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PcSummary} from "../../../shared/model/pc-summary";
import {PcDetail} from "../../../shared/model/pc-detail";
import {PcDetailImg} from "../../../shared/model/pc-detail-img";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.css']
})
export class GoodsDetailComponent implements OnInit {
  goodsSummary$: Observable<PcSummary>;
  goodsDetail$: Observable<PcDetail>;
  goodsDetailImg$: Observable<PcDetailImg>;
  goodsNumber: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.goodsSummary$ = this.route.data.map(data => data['summary']);
    this.goodsDetail$ = this.route.data.map(data => data['detail']);
    this.goodsDetailImg$ = this.route.data.map(data => data['detailImg']);
  }

  plus() {
    this.goodsNumber += 1;
  }

  minus() {
    if(this.goodsNumber > 1) {
      this.goodsNumber -= 1;
    }
  }
}
