import { TestBed } from '@angular/core/testing';

import { OKService } from './ok.service';

describe('OKService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OKService = TestBed.get(OKService);
    expect(service).toBeTruthy();
  });
});
