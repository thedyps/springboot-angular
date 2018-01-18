import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {PcDetailImg} from "../../../../shared/model/pc-detail-img";
declare var $ :any;

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.css']
})
export class DetailImageComponent implements OnInit {
  goodsDetailImg$: Observable<PcDetailImg>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.goodsDetailImg$ = this.route.data.map(data => data['detailImg']);
  }
}
