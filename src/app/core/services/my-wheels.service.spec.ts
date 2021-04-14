import { TestBed } from '@angular/core/testing';

import { MyWheelsService } from './my-wheels.service';

describe('MyWheelsService', () => {
  let service: MyWheelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWheelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
