import { TestBed } from '@angular/core/testing';

import { NewSafetyDocumentGuard } from './new-safety-document.guard';

describe('NewSafetyDocumentGuard', () => {
  let guard: NewSafetyDocumentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewSafetyDocumentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
