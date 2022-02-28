import "./App.css";
import { Component, useState } from "react";
import Message from "./components/Message";
import Greet from "./components/Greet";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Message name="Sagar" />
        <Message name="Samir" />
        <Greet name="Khyati" /> */}
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
