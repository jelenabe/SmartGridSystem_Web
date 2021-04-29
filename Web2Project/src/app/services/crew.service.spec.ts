/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrewService } from './crew.service';

describe('Service: Crew', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewService]
    });
  });

  it('should ...', inject([CrewService], (service: CrewService) => {
    expect(service).toBeTruthy();
  }));
});
