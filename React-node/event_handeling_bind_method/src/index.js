import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState((preState) => ({
      isToggleOn: !preState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.toggleHandler}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
