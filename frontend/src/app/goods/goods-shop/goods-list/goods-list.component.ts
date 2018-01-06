import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  active:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSide() {
    this.active = !this.active;
  }

}
