import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(this.state.count)
    // );
    this.setState(
      (preState) => ({ count: preState.count + 1 }),
      () => console.log(this.state.count)
    );
  }
  FiveIncrement() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.FiveIncrement()}>Increment</button>
      </>
    );
  }
}
export default Counter;
