/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReportOutageService } from './reportOutage.service';

describe('Service: ReportOutage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportOutageService]
    });
  });

  it('should ...', inject([ReportOutageService], (service: ReportOutageService) => {
    expect(service).toBeTruthy();
  }));
});
