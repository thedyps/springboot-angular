import { TestBed, inject } from '@angular/core/testing';

import { GoodsDetailImgResolverService } from './goods-detail-img-resolver.service';

describe('GoodsDetailImgResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsDetailImgResolverService]
    });
  });

  it('should be created', inject([GoodsDetailImgResolverService], (service: GoodsDetailImgResolverService) => {
    expect(service).toBeTruthy();
  }));
});
