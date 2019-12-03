import { TestBed } from '@angular/core/testing';

import { ImitationsService } from './imitations.service';

describe('ImitationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImitationsService = TestBed.get(ImitationsService);
    expect(service).toBeTruthy();
  });
});
