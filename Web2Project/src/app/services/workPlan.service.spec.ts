/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkPlanService } from './workPlan.service';

describe('Service: WorkPlan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkPlanService]
    });
  });

  it('should ...', inject([WorkPlanService], (service: WorkPlanService) => {
    expect(service).toBeTruthy();
  }));
});
