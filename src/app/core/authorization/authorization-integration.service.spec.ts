import { TestBed } from '@angular/core/testing';

import { AuthorizationIntegrationService } from './authorization-integration.service';

describe('AuthorizationIntegrationService', () => {
  let service: AuthorizationIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
