import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsShopComponent } from './goods-shop.component';

describe('GoodsShopComponent', () => {
  let component: GoodsShopComponent;
  let fixture: ComponentFixture<GoodsShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
