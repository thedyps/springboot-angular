import { Injectable } from '@angular/core';
import {PcList} from "../model/pc-list";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {FilterData} from "../model/filter-data";
import {PcFilter} from "../model/pc-filter";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {PcListPageNum} from "../model/pc-list-page-num";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast'
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap'


export const UNKNOWN_SEARCH_DATA: FilterData = {
  searchWord: '',
  sortWord: '-1',
  filterPcBrand: [],
  filterCpuKind: [],
  filterRamSpace: [],
  filterGraKind: [],
  filterOsName: []
};

const UNKNOWN_PC_LIST_PAGE_NUM: PcListPageNum = {
  startPage:0,
  endPage:0,
  pageCount:0
};

@Injectable()
export class GoodsListService {

  private static readonly PAGE_SIZE = 10;
  filterData: FilterData = UNKNOWN_SEARCH_DATA;
  pcCount: number;
  pageCount: number;

  private filterDataSubject = new BehaviorSubject<FilterData>(UNKNOWN_SEARCH_DATA);
  filterData$: Observable<FilterData> = this.filterDataSubject.asObservable();

  private goodsListSubject = new BehaviorSubject<PcList[]>([]);
  goodsList$: Observable<PcList[]> = this.goodsListSubject.asObservable();

  private goodsFilterSubject = new BehaviorSubject<PcFilter>(UNKNOWN_SEARCH_DATA);
  goodsFilter$: Observable<PcFilter> = this.goodsFilterSubject.asObservable();

  private goodsCountSubject = new BehaviorSubject<number>(0);
  goodsCount$: Observable<number> = this.goodsCountSubject.asObservable();

  private pcListPageNumSubject = new BehaviorSubject<PcListPageNum>(UNKNOWN_PC_LIST_PAGE_NUM);
  pcListPageNum$: Observable<PcListPageNum> = this.pcListPageNumSubject.asObservable();

  constructor(private _http: HttpClient) {
    this.filterData$
      .subscribe(data => this.filterData = data);
    this.goodsCount$
      .subscribe(count => this.pcCount = count);
    this.pcListPageNum$
      .subscribe( num => this.pageCount = num.pageCount);
  }

  setFilterData(filterData: FilterData) {
    this.filterDataSubject.next(filterData);
  }

  loadFirstPage(pcType: string): Observable<[any, any]> {
    return this.loadPage(pcType, 1);
  }

  loadSpecificPage(pcType: string, num: number): Observable<[any, any]>  {
    return this.loadPage(pcType, num);
  }

  prePage(pcType: string, num: number): Observable<[any, any]>  {
    let currentPage: number = num;
    if (currentPage > 1) {
      currentPage -= 1;
      return this.loadPage(pcType, currentPage);
    }
  }

  nextPage(pcType: string, num: number): Observable<[any, any]>  {
    let currentPage: number = num;
    if(currentPage  < this.pageCount)
    {
      currentPage += 1;
      return this.loadPage(pcType, currentPage);
    }
  }

  private loadPage(pcType: string, num: number): Observable<[any, any]> {
    if(this.filterData.searchWord.length !== 0 ||
      this.filterData.sortWord !== '-1' ||
      this.filterData.filterPcBrand.length !== 0 ||
      this.filterData.filterCpuKind.length !== 0 ||
      this.filterData.filterRamSpace.length !== 0 ||
      this.filterData.filterGraKind.length !== 0 ||
      this.filterData.filterOsName.length !== 0) {

      return this.getSearchCount(pcType, this.filterData)
        .do(() => this.loadPcListPageNum(pcType, num))
        .switchMap(() => this.getSearchList(pcType, num, this.filterData),
          (count, list) => <any> [count, list]);
    }

    return this.getCount(pcType)
      .do(() => this.loadPcListPageNum(pcType, num))
      .switchMap(() => this.getList(pcType, num),
        (count, list) => <any> [count, list]);
  }

  loadPcListPageNum(pcType: string, num: number) {
    let currentPage: number = num;
    let pageCount: number = 0;
    let startPage: number = 0;
    let endPage: number = 0;

    if(this.pcCount > 0) {
      pageCount = Math.floor(this.pcCount / GoodsListService.PAGE_SIZE) +
        (this.pcCount % GoodsListService.PAGE_SIZE == 0 ? 0 : 1);

      if (currentPage % 10 != 0) {
        startPage = Math.floor(currentPage / 10) * 10 + 1;
      } else {
        startPage = (Math.floor(currentPage / 10) - 1) * 10 + 1;
      }

      endPage= startPage + GoodsListService.PAGE_SIZE - 1;
      if (endPage > pageCount) endPage = pageCount;
    }

    let pcListPageNum: PcListPageNum = {
      startPage: startPage,
      endPage: endPage,
      pageCount: pageCount
    };

    this.pcListPageNumSubject.next(pcListPageNum);
  }

  getCount(pcType: string): Observable<any> {
    return this._http.get<number> ('/api/goods/list/' + pcType + '/count')
      .do(count => this.goodsCountSubject.next(count))
      .publishLast().refCount();
  }

  getList(pcType: string, num: number): Observable<any> {
    return this._http.get<PcList[]>('/api/goods/list/' + pcType + '/show/' + num)
      .do(list => this.goodsListSubject.next(list))
      .publishLast().refCount();
  }

  getFilter(): Observable<any> {
    return this._http.get<PcFilter>('/api/goods/list/filter')
      .do(filter => this.goodsFilterSubject.next(filter))
      .publishLast().refCount();

  }

  getSearchCount(pcType: string, pcSearchData:FilterData): Observable<any> {
    return this._http.patch<number>('/api/goods/list/' + pcType + "/searchCount", pcSearchData)
      .first()
      .do(count => this.goodsCountSubject.next(count))
      .publishLast().refCount();

  }

  getSearchList(pcType: string, num: number, pcSearchData:FilterData): Observable<any> {
    return this._http.patch<PcList[]>('/api/goods/list/' + pcType + '/show/' + num + "/searchList", pcSearchData)
      .first()
      .do(list => this.goodsListSubject.next(list))
      .publishLast().refCount();
  }
}
