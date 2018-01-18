import { TestBed, inject } from '@angular/core/testing';

import { GoodsDetailService } from './goods-detail.service';

describe('GoodsDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsDetailService]
    });
  });

  it('should be created', inject([GoodsDetailService], (service: GoodsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
