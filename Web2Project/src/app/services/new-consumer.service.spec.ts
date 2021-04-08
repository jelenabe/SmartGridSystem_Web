/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewConsumerService } from './new-consumer.service';

describe('Service: NewConsumer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewConsumerService]
    });
  });

  it('should ...', inject([NewConsumerService], (service: NewConsumerService) => {
    expect(service).toBeTruthy();
  }));
});
