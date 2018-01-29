import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegGoodsComponent } from './reg-goods.component';

describe('RegGoodsComponent', () => {
  let component: RegGoodsComponent;
  let fixture: ComponentFixture<RegGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
