/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkRequestService } from './work-request.service';

describe('Service: WorkRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkRequestService]
    });
  });

  it('should ...', inject([WorkRequestService], (service: WorkRequestService) => {
    expect(service).toBeTruthy();
  }));
});
