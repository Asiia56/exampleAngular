import { TestBed } from '@angular/core/testing';

import { DeepFoundationService } from './deep-foundation.service';

describe('DeepFoundationService', () => {
  let service: DeepFoundationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepFoundationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
