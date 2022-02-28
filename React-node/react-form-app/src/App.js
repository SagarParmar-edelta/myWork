import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState();
  const [greet, setGreet] = useState();
  const textHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  const greetingHandler = (event) => {
    setGreet(text);
  };
  return (
    <div className="App">
      <h1>Hello {greet}!</h1>
      <input type={"text"} onChange={textHandler} value={text} />
      <button onClick={greetingHandler}>When Click 👆</button>
    </div>
  );
}

export default App;
