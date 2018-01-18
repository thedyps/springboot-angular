import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast'
import 'rxjs/add/operator/first'
import {ActivatedRoute, Router} from "@angular/router";
import {PcFilter} from "../../../../shared/model/pc-filter";
import {PcListPageNum} from "../../../../shared/model/pc-list-page-num";
import {GoodsListService} from "../../../../shared/services/goods-list.service";
import {FilterData} from "../../../../shared/model/filter-data";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  formModel: FormGroup;
  goodsFilter$: Observable<PcFilter>;
  pcListPageNum$: Observable<PcListPageNum>;
  private btnClick = new Subject<Event>();
  btnClick$: Observable<Event> = this.btnClick.asObservable();
  pcType: string;
  pageNumber: number;

  sortWords = [
    {name: '정렬 기준', value: '-1'},
    {name: '낮은 가격순', value: 'priceASC'},
    {name: '높은 가격순', value: 'priceDESC'},
    {name: '높은 등급순', value: 'gradeDESC'}
  ];

  constructor(private fb: FormBuilder, private goodsListService: GoodsListService, private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.pcType = params['pcType'];
        this.pageNumber = parseInt(params['num']);
      }
    );
    this.createForm();
    this.goodsFilter$ = this.goodsListService.goodsFilter$;
    this.pcListPageNum$ = this.goodsListService.pcListPageNum$;
    this.goodsListService.getFilter().subscribe();
  }

  createForm() {
    this.formModel = this.fb.group({
      searchWord: [''],
      sortWord: ['-1'],
      filterPcBrand: this.fb.array([]),
      filterCpuKind: this.fb.array([]),
      filterRamSpace: this.fb.array([]),
      filterGraKind: this.fb.array([]),
      filterOsName: this.fb.array([])
    });
  }

  onChange(kind:string, value:string, isChecked: boolean) {
    const formArray = <FormArray>this.formModel.get(kind);

    if(isChecked) {
      formArray.push(new FormControl(value));
    } else {
      let index = formArray.controls.findIndex((x) => x.value == value);
      formArray.removeAt(index);
    }
  }

  filter() {
    const filterData:FilterData = {
      searchWord: this.formModel.get('searchWord').value,
      sortWord: this.formModel.get('sortWord').value,
      filterPcBrand: this.formModel.get('filterPcBrand').value,
      filterCpuKind: this.formModel.get('filterCpuKind').value,
      filterRamSpace: this.formModel.get('filterRamSpace').value,
      filterGraKind: this.formModel.get('filterGraKind').value,
      filterOsName: this.formModel.get('filterOsName').value
    };

    this.goodsListService.setFilterData(filterData);
    this.goodsListService.loadSpecificPage(this.pcType, 1).map(data => data[0]).subscribe(
      () => {}
    );
    this.goodsListService.loadSpecificPage(this.pcType, 1).map(data => data[1]).subscribe(
      () => {}
    );
  }

  toPrePage() {
    this.goodsListService.prePage(this.pcType, this.pageNumber).map(data => data[1]).subscribe(
      () => {},
      () => {},
      () => this.router.navigate(['/goods/list', this.pcType, this.pageNumber - 1])
    );
  }

  toNextPage() {
    this.goodsListService.nextPage(this.pcType, this.pageNumber).map(data => data[1]).subscribe(
      () => {},
      () => {},
      () => this.router.navigate(['/goods/list', this.pcType, this.pageNumber + 1])
    );
  }
}
