import { TestBed } from '@angular/core/testing';

import { ServiceticketService } from './serviceticket.service';

describe('ServiceticketService', () => {
  let service: ServiceticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
