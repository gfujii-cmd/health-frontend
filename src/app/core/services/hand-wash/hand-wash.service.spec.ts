import { TestBed } from '@angular/core/testing';

import { HandWashService } from './hand-wash.service';

describe('HandWashService', () => {
  let service: HandWashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandWashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
