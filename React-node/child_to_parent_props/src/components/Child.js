import { useState } from "react";
import "./Child.css";

const Child = ({ change }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="child">
      <h3>Child Component</h3>
      <input
        className="input-box"
        type="text"
        name="takeString"
        id=""
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        placeholder="Enter Input Text"
      />
      <button className="input-box" onClick={() => change(inputText)}>
        change Parent
      </button>
    </div>
  );
};
export default Child;
