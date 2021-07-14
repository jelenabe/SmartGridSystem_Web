import { Component, Injector, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IConsumer } from '../model/consumer';
import { IHero } from '../model/hero';
import { ReactBidirectionalApplication } from '../react-bidirectional/react-bidirectional-application';

@Component({
  selector: 'app-react-bidirectional-renderer',
  templateUrl: './react-bidirectional-renderer.component.html',
  styleUrls: ['./react-bidirectional-renderer.component.css']
})
export class ReactBidirectionalRendererComponent implements OnInit {

  @Input() consumers$: BehaviorSubject<IConsumer[]>;  
  
    constructor(public injector: Injector) { }
  
    ngOnInit() {
      // We add only one parameter into initialize function
      ReactBidirectionalApplication.initialize('react-owc-renderer', this.injector, this.consumers$);
    }

}
