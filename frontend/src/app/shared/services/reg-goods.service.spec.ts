import { TestBed, inject } from '@angular/core/testing';

import { RegGoodsService } from './reg-goods.service';

describe('RegGoodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegGoodsService]
    });
  });

  it('should be created', inject([RegGoodsService], (service: RegGoodsService) => {
    expect(service).toBeTruthy();
  }));
});
