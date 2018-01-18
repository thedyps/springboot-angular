import { TestBed, inject } from '@angular/core/testing';

import { GoodsDetailResolverService } from './goods-detail-resolver.service';

describe('GoodsDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsDetailResolverService]
    });
  });

  it('should be created', inject([GoodsDetailResolverService], (service: GoodsDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
