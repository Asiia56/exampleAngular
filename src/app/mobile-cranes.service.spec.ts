import { TestBed } from '@angular/core/testing';

import { MobileCranesService } from './mobile-cranes.service';

describe('MobileCranesService', () => {
  let service: MobileCranesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileCranesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
