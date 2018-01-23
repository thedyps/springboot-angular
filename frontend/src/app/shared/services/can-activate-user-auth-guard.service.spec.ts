import { TestBed, inject } from '@angular/core/testing';

import { CanActivateUserAuthGuardService } from './can-activate-user-auth-guard.service';

describe('CanActivateUserAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateUserAuthGuardService]
    });
  });

  it('should be created', inject([CanActivateUserAuthGuardService], (service: CanActivateUserAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
