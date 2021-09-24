import { TestBed } from '@angular/core/testing';

import { GameficationService } from './gamefication.service';

describe('GameficationService', () => {
  let service: GameficationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameficationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
