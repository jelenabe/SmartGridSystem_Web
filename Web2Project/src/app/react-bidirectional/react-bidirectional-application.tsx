import { Injector } from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BehaviorSubject } from "rxjs";
import { IConsumer } from "../model/consumer";
import { IHero } from "../model/hero";
import ReactBidirectionalHero from "./react-bidirectional-hero";

interface IReactBidirectionalApp {
    injector: Injector;
    consumers$: BehaviorSubject<IConsumer[]>; // We use this interface to grab RxJS object
  }
  
  class ReactBidirectionalApp extends React.Component<IReactBidirectionalApp, any> {
    constructor(props: any) {
      super(props);
  
      this.state = {
        consumers$: this.props.consumers$ // and we pass this data into ReactBidirectionalHero component
      };
    }
  
    render() {
      return (
        <div className={'renderer'}>
          <h2>ReactJS component (bidirectional data binding): </h2>
          <ReactBidirectionalHero consumers$={this.state.consumers$}/>
        </div>
      );
    }
  }
  
  export class ReactBidirectionalApplication {
  
    static initialize(
      containerId: string,
      injector: Injector,
      consumers$: BehaviorSubject<IConsumer[]>, // This is necessary to get RxJS object
    ) {
      ReactDOM.render(
        <ReactBidirectionalApp injector={injector} consumers$={consumers$}/>,
        document.getElementById(containerId)
      );
    }
  }