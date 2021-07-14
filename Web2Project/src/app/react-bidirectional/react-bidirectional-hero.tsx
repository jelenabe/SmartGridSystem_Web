import * as React from "react";
import { BehaviorSubject } from "rxjs";
import { IConsumer } from "../model/consumer";
import { IHero } from "../model/hero";

interface IReactBidirectionalHero {
    consumers$: BehaviorSubject<IConsumer[]>;
  }
  
  class ReactBidirectionalHero extends React.Component<IReactBidirectionalHero, any> {
    constructor(props: any) {
      super(props);
  
      this.state = {
        consumers: []
      };
  
      this.addAge = this.addAge.bind(this); // Register function to bump age
      this.addHero  = this.addHero.bind(this); // Register function to add new Hero
    }
  
    componentDidMount(): void {
      // In componentDidMount we subscribe heroes$ object
      this.props.consumers$.subscribe((res: IConsumer[]) => {
        // and we pass this data into React State object
        this.setState({consumers: res});
      });
    }
  
    addAge(i: number) {
      const temp = this.state.heroes;
      temp[i].age = temp[i].age + 1;
  
      // In this way we update RxJS object
      this.props.consumers$.next( temp);
    }
  
    addHero() {
      const temp = this.state.consumers;
      temp.push({name: 'Atena', age: 31});
  
      // In this way we update RxJS object
      this.props.consumers$.next(temp);
    }
  
    render() {
      // Hire we render RxJS part of application with addAge button and ADD ATENA button below
      const consumers = this.state.consumers.map((consumer: IConsumer, i: any) => {
        return <span key={i}>{consumer.firstName} - {consumer.lastName} </span>;
      });
      return (
        <span>
          <span>react-hero works!</span><br/>
          {consumers}
          <br/>
         
        </span>
      );
    }
  }
  
  export default ReactBidirectionalHero;