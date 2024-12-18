import { TestBed } from '@angular/core/testing';

import { OneApiServicesService } from './one-api-services.service';

describe('OneApiServicesService', () => {
  let service: OneApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
