import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PcList} from "../../../shared/model/pc-list";
import 'rxjs/add/operator/map';
import {GoodsListService} from "../../../shared/services/goods-list.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {PcListPageNum} from "../../../shared/model/pc-list-page-num";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: []
})
export class ListComponent implements OnInit {

  goodsList$: Observable<PcList[]>;
  pcListPageNum$: Observable<PcListPageNum>;
  pcType: string;
  pageNumber: number;

  constructor(private goodsListService: GoodsListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.pcType = params['pcType'];
        this.pageNumber = params['num'];
      }
    );
    this.goodsList$ = this.goodsListService.goodsList$;
    this.pcListPageNum$ = this.goodsListService.pcListPageNum$;
    this.goodsListService.loadFirstPage(this.pcType).map(data => data[0]).subscribe(
      () => {}
    );
    this.goodsListService.loadFirstPage(this.pcType).map(data => data[1]).subscribe(
      () => {}
    );
  }

  pageChange(num: number) {
    this.goodsListService.loadSpecificPage(this.pcType, num).map(data => data[1]).subscribe(
      () => {}

    );
  }
}
