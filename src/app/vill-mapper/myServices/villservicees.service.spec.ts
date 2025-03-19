import { TestBed } from '@angular/core/testing';

import { VillserviceesService } from './villservicees.service';

describe('VillserviceesService', () => {
  let service: VillserviceesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillserviceesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
