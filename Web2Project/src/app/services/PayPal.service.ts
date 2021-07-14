import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IConsumer } from '../model/consumer';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {

  private consumers$: BehaviorSubject<IConsumer[]> = new BehaviorSubject<IConsumer[]>([]);
  
  constructor() {
  }

  addConsumers(consumer: IConsumer) { // To add new hero
    const actualConsumer = this.consumers$.value;
    actualConsumer.push(consumer);
    this.consumers$.next(actualConsumer);
  }

  getConsumers$(): BehaviorSubject<IConsumer[]> { // To get BehaviorSubject and pass it into ReactJS
    return this.consumers$;
  }

}
