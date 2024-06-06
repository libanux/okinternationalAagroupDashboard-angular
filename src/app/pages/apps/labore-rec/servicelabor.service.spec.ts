import { TestBed } from '@angular/core/testing';

import { ServicelaborService } from './servicelabor.service';

describe('ServicelaborService', () => {
  let service: ServicelaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
