import { TestBed } from '@angular/core/testing';

import { EnableButtonService } from './enable-button.service';

describe('EnableButtonService', () => {
  let service: EnableButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnableButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
