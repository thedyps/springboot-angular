import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegGoodsService} from "../../../shared/services/reg-goods.service";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-reg-goods',
  templateUrl: './reg-goods.component.html',
  styleUrls: ['./reg-goods.component.css'],

})

export class RegGoodsComponent implements OnInit {
  brandList: string[] = ['ASUS', 'GIGABYTE', 'LENOVO', 'MSI', 'SMARTCOM'];
  typeList: string[] = ['Basic', 'Game', 'Middle', 'Office', '3D'];
  code$: Observable<string>;
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
    this.code$ = this.regGoodsService.code$;
    this.regGoodsService.getLatestCode().subscribe();

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

  onSubmit(formValue: any, formValid: boolean) {
    console.log(formValue);
    if(formValid && formValue.cpu && formValue.ram && formValue.gra
      && (formValue.hdd || formValue.ssd) && formValue.main && formValue.os) {
      console.log(formValue);
      this.regGoodsService.register(
        {
          'avgGrade': formValue.avgGrade,
          'brand': formValue.brand,
          'code': formValue.code,
          'cpu': formValue.cpu,
          'deliPrice': formValue.deliPrice,
          'gra': formValue.gra,
          'hdd': formValue.hdd?formValue.hdd:'',
          'main': formValue.main,
          'os': formValue.os,
          'ram': formValue.ram,
          'ssd': formValue.ssd?formValue.ssd:'',
          'stock': formValue.stock,
          'sumPrice': formValue.sumPrice,
          'type': formValue.type
        }
      ).subscribe(
        () => {},
        () => {},
        () => {
          this.regGoodsService.regImg({'code': formValue.code, 'brand': formValue.brand})
            .subscribe(
              () => {},
              () => {},
              () => {
                location.reload()
              }
            );
        }
      );
    }
  }
}




