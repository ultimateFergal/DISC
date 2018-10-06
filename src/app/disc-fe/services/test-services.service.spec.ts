import { TestBed } from '@angular/core/testing';

import { TestServicesService } from './test-services.service';

describe('TestServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestServicesService = TestBed.get(TestServicesService);
    expect(service).toBeTruthy();
  });
});
