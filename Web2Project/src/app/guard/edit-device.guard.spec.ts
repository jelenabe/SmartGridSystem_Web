import { TestBed } from '@angular/core/testing';

import { EditDeviceGuard } from './edit-device.guard';

describe('EditDeviceGuard', () => {
  let guard: EditDeviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditDeviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
