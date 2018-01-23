import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAdminAuthGuardService } from './can-activate-admin-auth-guard.service';

describe('CanActivateAdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAdminAuthGuardService]
    });
  });

  it('should be created', inject([CanActivateAdminAuthGuardService], (service: CanActivateAdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
