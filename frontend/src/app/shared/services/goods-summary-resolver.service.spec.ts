import { TestBed, inject } from '@angular/core/testing';

import { GoodsSummaryResolverService } from './goods-summary-resolver.service';

describe('GoodsSummaryResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsSummaryResolverService]
    });
  });

  it('should be created', inject([GoodsSummaryResolverService], (service: GoodsSummaryResolverService) => {
    expect(service).toBeTruthy();
  }));
});
