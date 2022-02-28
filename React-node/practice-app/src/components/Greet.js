import React, { Component } from "react";

class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: `Hello ${this.props.name}, How are you?`,
    };
  }
  changeMessage() {
    this.setState({
      message: "I am Fine!😊",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Answer</button>
      </>
    );
  }
}

export default Greet;
