import { TestBed } from '@angular/core/testing';

import { NewIncidentGuard } from './new-incident.guard';

describe('NewIncidentGuard', () => {
  let guard: NewIncidentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewIncidentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
