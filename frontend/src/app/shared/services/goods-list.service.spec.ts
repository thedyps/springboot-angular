import { TestBed, inject } from '@angular/core/testing';

import { GoodsListService } from './goods-list.service';

describe('GoodsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsListService]
    });
  });

  it('should be created', inject([GoodsListService], (service: GoodsListService) => {
    expect(service).toBeTruthy();
  }));
});
