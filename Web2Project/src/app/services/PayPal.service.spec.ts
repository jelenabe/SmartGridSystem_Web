/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PayPalService } from './PayPal.service';

describe('Service: PayPal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayPalService]
    });
  });

  it('should ...', inject([PayPalService], (service: PayPalService) => {
    expect(service).toBeTruthy();
  }));
});
