import { TestBed } from '@angular/core/testing';

import { CraneService } from './crane.service';

describe('CraneService', () => {
  let service: CraneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
