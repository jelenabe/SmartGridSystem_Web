import { TestBed } from '@angular/core/testing';

import { SafetyDocumentsGuard } from './safety-documents.guard';

describe('SafetyDocumentsGuard', () => {
  let guard: SafetyDocumentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SafetyDocumentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
