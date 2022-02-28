import { Component } from "react";

class Message extends Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Message;
