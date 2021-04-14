import { TestBed } from '@angular/core/testing';

import { HotWheelsApiService } from './hot-wheels-api.service';

describe('HotWheelsApiService', () => {
  let service: HotWheelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotWheelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
