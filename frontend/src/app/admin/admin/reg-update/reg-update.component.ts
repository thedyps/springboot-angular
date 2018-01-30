import { Component, OnInit } from '@angular/core';
import {RegGoodsService} from "../../../shared/services/reg-goods.service";
import {Observable} from "rxjs/Observable";
import {RegFilter, RegGoods, RegPageNum} from "../../../shared/model/regGoods";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reg-update',
  templateUrl: './reg-update.component.html',
  styleUrls: ['./reg-update.component.css'],
  providers: [RegGoodsService]
})
export class RegUpdateComponent implements OnInit {
  brandList: string[] = ['ASUS', 'GIGABYTE', 'LENOVO', 'MSI', 'SMARTCOM'];
  typeList: string[] = ['Basic', 'Game', 'Middle', 'Office', '3D'];
  regGoods$: Observable<RegGoods[]>;
  regPageNum$: Observable<RegPageNum>;
  num: number = 1;
  filter: RegFilter = {
    'code': '',
    'type': 'All',
    'brand': '',
    'start': 1,
    'end': 10
  };

  updateChk: boolean = false;
  gradeUptChk: boolean = false;
  selectGoods: RegGoods;

  priceSum$: Observable<number>;
  gradeAvg$: Observable<number>;
  cpuObservables: { [key:string]:Observable<any>; } = {};
  ramObservables: { [key:string]:Observable<any>; } = {};
  graObservables: { [key:string]:Observable<any>; } = {};
  hddObservables: { [key:string]:Observable<any>; } = {};
  ssdObservables: { [key:string]:Observable<any>; } = {};
  mainObservables: { [key:string]:Observable<any>; } = {};
  osObservables: { [key:string]:Observable<any>; } = {};

  constructor(private regGoodsService: RegGoodsService) { }

  ngOnInit() {
    this.regGoodsService.regFilterSub().subscribe();
    this.regGoodsService.regCountSub().subscribe();
    this.regGoodsService.regPageCountSub().subscribe();

    this.regGoods$ = this.regGoodsService.regGoods$;
    this.regPageNum$ = this.regGoodsService.regPageNum$;

    this.regGoodsService.loadRegGoodsRecord(this.num)
      .map(data => data[0]).subscribe();
    this.regGoodsService.loadRegGoodsRecord(this.num)
      .map(data => data[1]).subscribe();

    this.priceSum$ = this.regGoodsService.priceSum$;
    this.regGoodsService.getPriceSum().subscribe();

    this.gradeAvg$ = this.regGoodsService.gradeAvg$;
    this.regGoodsService.getGradeAvg().subscribe();

    this.cpuObservables['brand'] = this.regGoodsService.cpuBrand$;
    this.cpuObservables['kind'] = this.regGoodsService.cpuKind$;
    this.cpuObservables['cpu'] = this.regGoodsService.cpu$;
    this.cpuObservables['cpuInfo'] = this.regGoodsService.cpuInfo$;

    this.ramObservables['brand'] = this.regGoodsService.ramBrand$;
    this.ramObservables['speed'] = this.regGoodsService.ramSpeed$;
    this.ramObservables['ram'] = this.regGoodsService.ram$;
    this.ramObservables['ramInfo'] = this.regGoodsService.ramInfo$;

    this.graObservables['brand'] = this.regGoodsService.graBrand$;
    this.graObservables['kind'] = this.regGoodsService.graKind$;
    this.graObservables['gra'] = this.regGoodsService.gra$;
    this.graObservables['graInfo'] = this.regGoodsService.graInfo$;

    this.hddObservables['brand'] = this.regGoodsService.hddBrand$;
    this.hddObservables['speed'] = this.regGoodsService.hddSpeed$;
    this.hddObservables['hdd'] = this.regGoodsService.hdd$;
    this.hddObservables['hddInfo'] = this.regGoodsService.hddInfo$;

    this.ssdObservables['brand'] = this.regGoodsService.ssdBrand$;
    this.ssdObservables['speed'] = this.regGoodsService.ssdSpeed$;
    this.ssdObservables['ssd'] = this.regGoodsService.ssd$;
    this.ssdObservables['ssdInfo'] = this.regGoodsService.ssdInfo$;

    this.mainObservables['brand'] = this.regGoodsService.mainBrand$;
    this.mainObservables['main'] = this.regGoodsService.main$;
    this.mainObservables['mainInfo'] = this.regGoodsService.mainInfo$;

    this.osObservables['os'] = this.regGoodsService.os$;
    this.osObservables['osInfo'] = this.regGoodsService.osInfo$;
  }

  Search(formData: any) {
    this.filter.code = formData.code;
    this.filter.type = formData.type!=''?formData.type:'All';
    this.filter.brand = formData.brand;

    this.regGoodsService.setRegFilter(this.filter);
    this.regGoodsService.loadRegGoodsRecord(this.num)
      .map(data => data[0]).subscribe();
    this.regGoodsService.loadRegGoodsRecord(this.num)
      .map(data => data[1]).subscribe();
  }

  toPreRecord() {
    this.regGoodsService.preRecord(this.num).map(data => data[1]).subscribe(
      () => {},
      () => {},
      () => {this.num -= 1;}
    );
  }

  toNextRecord() {
    this.regGoodsService.nextRecord(this.num).map(data => data[1]).subscribe(
      () => {},
      () => {},
      () => {this.num += 1;}
    );
  }

  recordChange(num: number) {
    this.regGoodsService.recordChange(num).map(data => data[1]).subscribe(
      () => {},
      () => {},
      () => {this.num = num;}
    );
  }

  showUpdateForm(selectGoods: RegGoods) {
    console.log(JSON.stringify(selectGoods));
    this.selectGoods = selectGoods;
    this.updateChk = true;
  }

  showRecord() {
    this.selectGoods = null;
    this.updateChk = false;
    this.gradeUptChk = false;
    this.regGoodsService.searchClear();
  }

  getCpuBrand() {
    this.regGoodsService.getCpuBrand().subscribe();
  }

  getCpuKind(brand: string) {
    if(brand != '') {
      this.regGoodsService.getCpuKind(brand).subscribe();
    }
  }

  getCpu(brand: string, kind: string) {
    if(brand!= '' && kind != '') {
      this.regGoodsService.getCpu({'brand': brand, 'kind': kind}).subscribe();
    }
  }

  getCpuInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getCpuInfo(code).subscribe();
    }
  }

  getRamBrand() {
    this.regGoodsService.getRamBrand().subscribe();
  }

  getRamSpeed(brand: string) {
    if(brand != '') {
      this.regGoodsService.getRamSpeed(brand).subscribe();
    }
  }

  getRam(brand: string, speed: string) {
    if(brand!= '' && speed != '') {
      this.regGoodsService.getRam({'brand': brand, 'speed': speed}).subscribe();
    }
  }

  getRamInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getRamInfo(code).subscribe();
    }
  }

  getGraBrand() {
    this.regGoodsService.getGraBrand().subscribe();
  }

  getGraKind(brand: string) {
    if(brand != '') {
      this.regGoodsService.getGraKind(brand).subscribe();
    }
  }

  getGra(brand: string, kind: string) {
    if(brand != '' && kind != '') {
      this.regGoodsService.getGra({'brand': brand, 'kind': kind}).subscribe();
    }
  }

  getGraInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getGraInfo(code).subscribe();
    }
  }

  getHddBrand() {
    this.regGoodsService.getHddBrand().subscribe();
  }

  getHddSpeed(brand: string) {
    if(brand != '') {
      this.regGoodsService.getHddSpeed(brand).subscribe();
    }
  }

  getHdd(brand: string, speed: string) {
    if(brand != '' && speed != '') {
      this.regGoodsService.getHdd({'brand': brand, 'speed': speed}).subscribe();
    }
  }

  getHddInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getHddInfo(code).subscribe();
    }
  }

  getSsdBrand() {
    this.regGoodsService.getSsdBrand().subscribe();
  }

  getSsdSpeed(brand: string) {
    if(brand != '') {
      this.regGoodsService.getSsdSpeed(brand).subscribe();
    }
  }

  getSsd(brand: string, speed: string) {
    if(brand != '' && speed != '') {
      this.regGoodsService.getSsd({'brand': brand, 'speed': speed}).subscribe();
    }
  }

  getSsdInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getSsdInfo(code).subscribe();
    }
  }

  getMainBrand() {
    this.regGoodsService.getMainBrand().subscribe();
  }

  getMain(brand: string) {
    if(brand != '') {
      this.regGoodsService.getMain(brand).subscribe();
    }
  }

  getMainInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getMainInfo(code).subscribe();
    }
  }

  getOs() {
    this.regGoodsService.getOs().subscribe();
  }

  getOsInfo(code: string) {
    if(code!= '') {
      this.regGoodsService.getOsInfo(code).subscribe();
    }
  }

  setGrade() {
    this.gradeUptChk = true;
  }

  regUpdate(formValue: any, formValid: boolean) {
    console.log(formValue);
    if(formValid) {
      console.log(formValue);
      this.regGoodsService.uptGoods(
        {
          'avgGrade': this.gradeUptChk?formValue.avgGrade:this.selectGoods.pcGrade,
          'brand': formValue.uptBrand,
          'code': formValue.uptCode,
          'cpu': formValue.cpu?formValue.cpu:this.selectGoods.cpuCode,
          'deliPrice': formValue.deliPrice,
          'gra': formValue.gra?formValue.gra:this.selectGoods.graCode,
          'hdd': formValue.hdd?formValue.hdd:this.selectGoods.hddCode,
          'main': formValue.main?formValue.main:this.selectGoods.mainCode,
          'os': formValue.os?formValue.os:this.selectGoods.osCode,
          'ram': formValue.ram?formValue.ram:this.selectGoods.ramCode,
          'ssd': formValue.ssd?formValue.ssd:this.selectGoods.ssdCode,
          'stock': formValue.stock,
          'sumPrice': formValue.sumPrice,
          'type': formValue.uptType
        }
      ).subscribe(
        () => {},
        () => {},
        () => {
          this.regGoodsService.uptImage({'code': formValue.uptCode, 'brand': formValue.uptBrand})
            .subscribe(
              () => {},
              () => {},
              () => {
                this.regGoodsService.recordChange(this.num).map(data => data[1]).subscribe(
                  () => {},
                  () => {},
                  () => { this.showRecord() }
                );
              }
            );
        }
      );
    }
  }

  delGoods(code: any) {
    this.regGoodsService.delGoods(code).subscribe(
      () => {},
      () => {},
      () => {
        this.regGoodsService.recordChange(this.num).map(data => data[1]).subscribe();
      }
    )
  }
}
