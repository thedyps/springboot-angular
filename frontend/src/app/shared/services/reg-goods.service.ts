import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {RegFilter, RegGoods, RegInfo, RegPageNum, RegPart} from "../model/regGoods";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast'
import 'rxjs/add/operator/first'
import 'rxjs/add/operator/switchMap'

const baseUrl = 'api/admin/regGoods/';
const UNKNOWN_REG_GOODS: RegGoods = {
  pcPrice: 0, pcDeliprice: 0 , pcGrade: 0 , pcStock: 0,
  pcCode: '', pcBrand: '', pcType: '',
  cpuCode: '', cpuName: '', ramCode: '', ramName: '', mainCode: '', mainName: '',
  graCode: '', graName: '', osCode: '', osName: ''
};
const UNKNOWN_REG_PAGE_NUM: RegPageNum = {
  startPage:0,
  endPage:0,
  pageCount:0
};


@Injectable()
export class RegGoodsService {

  constructor(private _http: HttpClient, private authService: AuthService) { }

  private headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.authService.getToken()['token']);

  private price: { [key:string]:number; } = {};
  private priceSubject = new BehaviorSubject<{ [key:string]:number } >({});
  private price$: Observable<{ [key:string]:number }> = this.priceSubject.asObservable();

  private priceSumSubject = new BehaviorSubject<number>(0);
  priceSum$: Observable<number> = this.priceSumSubject.asObservable();

  getPriceSum(): Observable<any> {
    return this.price$.do(
      data => {
        let sum = 0;
        for(let key in data) {
          sum += data[key];
        }
        this.priceSumSubject.next(sum);
      }
    )
  }

  private grade: { [key:string]:number; } = {};
  private gradeSubject = new BehaviorSubject<{ [key:string]:number } >({});
  private grade$: Observable<{ [key:string]:number} > = this.gradeSubject.asObservable();

  private gradeAvgSubject = new BehaviorSubject<number>(0);
  gradeAvg$ = this.gradeAvgSubject.asObservable();

  getGradeAvg(): Observable<any> {
    return this.grade$.do(
      data => {
        let sum = 0;
        let num = 0;
        for(let key in data) {
          sum += data[key];
          num += 1;
        }
        if(sum > 0 && num > 0) {
          let avg = Math.round(Math.round(sum / num) / 10);
          this.gradeAvgSubject.next(avg);
        }
      }
    );
  }

  private cpuBrandSubject = new BehaviorSubject<string>('');
  cpuBrand$: Observable<string> = this.cpuBrandSubject.asObservable();

  private cpuKindSubject = new BehaviorSubject<string>('');
  cpuKind$: Observable<string> = this.cpuKindSubject.asObservable();

  private cpuSubject = new BehaviorSubject<RegPart[]>([]);
  cpu$: Observable<RegPart[]> = this.cpuSubject.asObservable();

  private cpuInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  cpuInfo$: Observable<RegInfo> = this.cpuInfoSubject.asObservable();

  getCpuBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'cpuBrand', {headers: this.headers})
      .do(data => this.cpuBrandSubject.next(data))
      .publishLast().refCount();
  }

  getCpuKind(cpuBrand: string): Observable<any> {
    return this._http.patch<string>(baseUrl+'cpuKind', cpuBrand,{headers: this.headers})
      .do(data => this.cpuKindSubject.next(data))
      .publishLast().refCount();
  }

  getCpu(param: any): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'cpu', param,{headers: this.headers})
      .do(data => this.cpuSubject.next(data))
      .publishLast().refCount();
  }

  getCpuInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'cpuInfo', code, {headers: this.headers})
      .do(data => {
        this.cpuInfoSubject.next(data);
        this.price['cpu'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['cpu'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }

  private ramBrandSubject = new BehaviorSubject<string>('');
  ramBrand$: Observable<string> = this.ramBrandSubject.asObservable();

  private ramSpeedSubject = new BehaviorSubject<string>('');
  ramSpeed$: Observable<string> = this.ramSpeedSubject.asObservable();

  private ramSubject = new BehaviorSubject<RegPart[]>([]);
  ram$: Observable<RegPart[]> = this.ramSubject.asObservable();

  private ramInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  ramInfo$: Observable<RegInfo> = this.ramInfoSubject.asObservable();

  getRamBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'ramBrand',{headers: this.headers})
      .do(data => this.ramBrandSubject.next(data))
      .publishLast().refCount();
  }

  getRamSpeed(ramBrand: string): Observable<any> {
    return this._http.patch<string>(baseUrl+'ramSpeed', ramBrand,{headers: this.headers})
      .do(data => this.ramSpeedSubject.next(data))
      .publishLast().refCount();
  }

  getRam(param: any): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'ram', param,{headers: this.headers})
      .do(data => this.ramSubject.next(data))
      .publishLast().refCount();
  }

  getRamInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'ramInfo', code, {headers: this.headers})
      .do(data => {
        this.ramInfoSubject.next(data);
        this.price['ram'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['ram'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }

  private graBrandSubject = new BehaviorSubject<string>('');
  graBrand$: Observable<string> = this.graBrandSubject.asObservable();

  private graKindSubject = new BehaviorSubject<string>('');
  graKind$: Observable<string> = this.graKindSubject.asObservable();

  private graSubject = new BehaviorSubject<RegPart[]>([]);
  gra$: Observable<RegPart[]> = this.graSubject.asObservable();

  private graInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  graInfo$: Observable<RegInfo> = this.graInfoSubject.asObservable();

  getGraBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'graBrand',{headers: this.headers})
      .do(data => this.graBrandSubject.next(data))
      .publishLast().refCount();
  }

  getGraKind(graBrand: string): Observable<any> {
    return this._http.patch<string>(baseUrl+'graKind', graBrand,{headers: this.headers})
      .do(data => this.graKindSubject.next(data))
      .publishLast().refCount();
  }

  getGra(param: any): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'gra', param,{headers: this.headers})
      .do(data => this.graSubject.next(data))
      .publishLast().refCount();
  }

  getGraInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'graInfo', code, {headers: this.headers})
      .do(data => {
        this.graInfoSubject.next(data);
        this.price['gra'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['gra'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }

  private hddBrandSubject = new BehaviorSubject<string>('');
  hddBrand$: Observable<string> = this.hddBrandSubject.asObservable();

  private hddSpeedSubject = new BehaviorSubject<string>('');
  hddSpeed$: Observable<string> = this.hddSpeedSubject.asObservable();

  private hddSubject = new BehaviorSubject<RegPart[]>([]);
  hdd$: Observable<RegPart[]> = this.hddSubject.asObservable();

  private hddInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  hddInfo$: Observable<RegInfo> = this.hddInfoSubject.asObservable();

  getHddBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'hddBrand',{headers: this.headers})
      .do(data => this.hddBrandSubject.next(data))
      .publishLast().refCount();
  }

  getHddSpeed(hddBrand: string): Observable<any> {
    return this._http.patch<string>(baseUrl+'hddSpeed', hddBrand,{headers: this.headers})
      .do(data => this.hddSpeedSubject.next(data))
      .publishLast().refCount();
  }

  getHdd(param: any): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'hdd', param,{headers: this.headers})
      .do(data => this.hddSubject.next(data))
      .publishLast().refCount();
  }

  getHddInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'hddInfo', code, {headers: this.headers})
      .do(data => {
        this.hddInfoSubject.next(data);
        this.price['hdd'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['hdd'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }

  private ssdBrandSubject = new BehaviorSubject<string>('');
  ssdBrand$: Observable<string> = this.ssdBrandSubject.asObservable();

  private ssdSpeedSubject = new BehaviorSubject<string>('');
  ssdSpeed$: Observable<string> = this.ssdSpeedSubject.asObservable();

  private ssdSubject = new BehaviorSubject<RegPart[]>([]);
  ssd$: Observable<RegPart[]> = this.ssdSubject.asObservable();

  private ssdInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  ssdInfo$: Observable<RegInfo> = this.ssdInfoSubject.asObservable();

  getSsdBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'ssdBrand',{headers: this.headers})
      .do(data => this.ssdBrandSubject.next(data))
      .publishLast().refCount();
  }

  getSsdSpeed(ssdBrand: string): Observable<any> {
    return this._http.patch<string>(baseUrl+'ssdSpeed', ssdBrand,{headers: this.headers})
      .do(data => this.ssdSpeedSubject.next(data))
      .publishLast().refCount();
  }

  getSsd(param: any): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'ssd', param,{headers: this.headers})
      .do(data => this.ssdSubject.next(data))
      .publishLast().refCount();
  }

  getSsdInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'ssdInfo', code, {headers: this.headers})
      .do(data => {
        this.ssdInfoSubject.next(data)
        this.price['ssd'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['ssd'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }

  private mainBrandSubject = new BehaviorSubject<string>('');
  mainBrand$: Observable<string> = this.mainBrandSubject.asObservable();

  private mainSubject = new BehaviorSubject<RegPart[]>([]);
  main$: Observable<RegPart[]> = this.mainSubject.asObservable();

  private mainInfoSubject = new BehaviorSubject<RegInfo>({price: 0, grade: 0});
  mainInfo$: Observable<RegInfo> = this.mainInfoSubject.asObservable();

  getMainBrand(): Observable<any> {
    return this._http.get<string>(baseUrl+'mainBrand',{headers: this.headers})
      .do(data => this.mainBrandSubject.next(data))
      .publishLast().refCount();
  }

  getMain(mainBrand: string): Observable<any> {
    return this._http.patch<RegPart[]>(baseUrl+'main', mainBrand,{headers: this.headers})
      .do(data => this.mainSubject.next(data))
      .publishLast().refCount();
  }

  getMainInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'mainInfo', code, {headers: this.headers})
      .do(data => {
        this.mainInfoSubject.next(data)
        this.price['main'] = data.price;
        this.priceSubject.next(this.price);
        this.grade['main'] = data.grade;
        this.gradeSubject.next(this.grade);
      })
      .publishLast().refCount();
  }


  private osSubject = new BehaviorSubject<RegPart[]>([]);
  os$: Observable<RegPart[]> = this.osSubject.asObservable();

  private osInfoSubject = new BehaviorSubject<RegInfo>({price: 0});
  osInfo$: Observable<RegInfo> = this.osInfoSubject.asObservable();

  getOs(): Observable<any> {
    return this._http.get<RegPart[]>(baseUrl+'os',{headers: this.headers})
      .do(data => this.osSubject.next(data))
      .publishLast().refCount();
  }

  getOsInfo(code: string): Observable<any> {
    return this._http.patch<RegInfo>(baseUrl+'osInfo', code, {headers: this.headers})
      .do(data => {
        this.osInfoSubject.next(data)
        this.price['os'] = data.price;
        this.priceSubject.next(this.price);
      })
      .publishLast().refCount();
  }

  private codeSubject = new BehaviorSubject<string>('');
  code$: Observable<string> = this.codeSubject.asObservable();

  getLatestCode(): Observable<any> {
    return this._http.get(baseUrl+'latestCode', {headers: this.headers, responseType: 'text'})
      .do(data => this.codeSubject.next(data));
  }

  regImg(param: any): Observable<any> {
    return this._http.post(baseUrl + 'regImg', param, {headers: this.headers});
  }

  register(param: any): Observable<any> {
    return this._http.post(baseUrl+'regGoods', param, {headers: this.headers});
  }

  private static readonly COLUMN_SIZE = 10;
  regFilter: RegFilter = {
    'code': '',
    'type': 'All',
    'brand': '',
    'start': 1,
    'end': 10
  };
  regPageCount: number;
  regCount: number;

  private regFilterSubject = new BehaviorSubject<RegFilter>(this.regFilter);
  regFilter$: Observable<RegFilter> = this.regFilterSubject.asObservable();

  regFilterSub(): Observable<any> {
    return this.regFilter$
      .do(data => this.regFilter = data);
  }

  setRegFilter(param: any) {
    this.regFilterSubject.next(param);
  }

  private regCountSubject = new BehaviorSubject<number>(0);
  regCount$: Observable<number> = this.regCountSubject.asObservable();

  getRegCount(): Observable<any> {
    return this._http.patch<number>(baseUrl + 'getRegCount', this.regFilter, {headers: this.headers})
      .do(count => this.regCountSubject.next(count))
      .publishLast().refCount();
  }

  regCountSub(): Observable<any> {
    return this.regCount$
      .do(data => this.regCount = data);
  }

  private regGoodsSubject = new BehaviorSubject<RegGoods[]>([]);
  regGoods$: Observable<RegGoods[]> = this.regGoodsSubject.asObservable();

  getRegGoods(): Observable<any> {
    return this._http.patch<RegGoods[]>(baseUrl + 'getRegGoods', this.regFilter, {headers: this.headers})
      .do(data => this.regGoodsSubject.next(data))
      .publishLast().refCount();
  }

  loadRegGoodsRecord(num: number): Observable<[any, any]> {
    return this.getRegCount()
      .do(() => this.loadRegPageNum(num))
      .switchMap(() => this.getRegGoods(),
        (count, list) => <any> [count, list]);
  }

  private regPageNumSubject = new BehaviorSubject<RegPageNum>(UNKNOWN_REG_PAGE_NUM);
  regPageNum$: Observable<RegPageNum> = this.regPageNumSubject.asObservable();

  regPageCountSub(): Observable<any> {
    return this.regPageNum$
      .do(data => this.regPageCount = data.pageCount);
  }

  loadRegPageNum(num: number) {
    let currentPage: number = num;
    let pageCount: number = 0;
    let startPage: number = 0;
    let endPage: number = 0;

    if(this.regCount > 0) {
      pageCount = Math.floor(this.regCount / RegGoodsService.COLUMN_SIZE) +
        (this.regCount % RegGoodsService.COLUMN_SIZE == 0 ? 0 : 1);

      if (currentPage % 10 != 0) {
        startPage = Math.floor(currentPage / 10) * 10 + 1;
      } else {
        startPage = (Math.floor(currentPage / 10) - 1) * 10 + 1;
      }

      endPage= startPage + RegGoodsService.COLUMN_SIZE - 1;
      if (endPage > pageCount) endPage = pageCount;
    }

    let regPageNum: RegPageNum = {
      startPage: startPage,
      endPage: endPage,
      pageCount: pageCount
    };
    this.regPageNumSubject.next(regPageNum);
  }

  preRecord(num: number): Observable<[any, any]> {
    let currentPage: number = num;
    if(currentPage > 1) {
      currentPage -= 1;
      this.regFilter.start = currentPage*10-9;
      this.regFilter.end = currentPage*10;
      this.regFilterSubject.next(this.regFilter);
      return this.loadRegGoodsRecord(currentPage);
    }
  }

  nextRecord(num: number): Observable<[any, any]> {
    let currentPage: number = num;
    if(currentPage < this.regPageCount) {
      currentPage += 1;
      this.regFilter.start = currentPage*10-9;
      this.regFilter.end = currentPage*10;
      this.regFilterSubject.next(this.regFilter);
      return this.loadRegGoodsRecord(currentPage);
    }
  }

  recordChange(num: number): Observable<[any, any]> {
    let currentPage = num;
    this.regFilter.start = currentPage*10-9;
    this.regFilter.end = currentPage*10;
    this.regFilterSubject.next(this.regFilter);
    return this.loadRegGoodsRecord(currentPage);
  }

  uptGoods(param: any): Observable<any> {
    return this._http.post(baseUrl + 'uptGoods', param, {headers: this.headers});
  }

  uptImage(param: any) {
    return this._http.post(baseUrl + 'uptImage', param, {headers: this.headers});
  }

  searchClear() {
    this.cpuBrandSubject.next('');
    this.cpuKindSubject.next('');
    this.cpuSubject.next([]);
    this.cpuInfoSubject.next({price: 0, grade: 0});

    this.ramBrandSubject.next('');
    this.ramSpeedSubject.next('');
    this.ramSubject.next([]);
    this.ramInfoSubject.next({price: 0, grade: 0});

    this.graBrandSubject.next('');
    this.graKindSubject.next('');
    this.graSubject.next([]);
    this.graInfoSubject.next({price: 0, grade: 0});

    this.hddBrandSubject.next('');
    this.hddSpeedSubject.next('');
    this.hddSubject.next([]);
    this.hddInfoSubject.next({price: 0, grade: 0});

    this.ssdBrandSubject.next('');
    this.ssdSpeedSubject.next('');
    this.ssdSubject.next([]);
    this.ssdInfoSubject.next({price: 0, grade: 0});

    this.mainBrandSubject.next('');
    this.mainSubject.next([]);
    this.mainInfoSubject.next({price: 0, grade: 0});

    this.osSubject.next([]);
    this.osInfoSubject.next({price: 0});
  }

  delGoods(code: string): Observable<any> {
    return this._http.post(baseUrl + 'delGoods', code, {headers: this.headers});
  }
}

