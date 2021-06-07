import { TestBed } from '@angular/core/testing';

import { NewDeviceGuard } from './new-device.guard';

describe('NewDeviceGuard', () => {
  let guard: NewDeviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewDeviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
