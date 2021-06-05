import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnableButtonService  implements OnDestroy{

  private subject = new Subject<any>();

  constructor() { }

  ngOnDestroy(): void {
    this.subject.unsubscribe();  // odjavljivanje, tj. posmatrac nece vise biti posmatrac
  }

  showEdit(id :number)
  {
    this.subject.next(id);  // salje novu vrednost->id svima koji su posmatraci, tj. koji su subscribe-ovani
  }

  getMessage():Observable<any>{
    return this.subject.asObservable();  // vraca objekat preko kojeg se moze pozvati subscribe...
  }



}
