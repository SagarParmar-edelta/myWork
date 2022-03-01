import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to React 🔥</h2>
        <h1>Time is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
