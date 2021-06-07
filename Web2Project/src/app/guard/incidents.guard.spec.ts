import { TestBed } from '@angular/core/testing';

import { IncidentsGuard } from './incidents.guard';

describe('IncidentsGuard', () => {
  let guard: IncidentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IncidentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
