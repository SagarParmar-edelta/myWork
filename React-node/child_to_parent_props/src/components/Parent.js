import { useState } from "react";
import Child from "./Child.js";
import "./Parent.css";

const Parent = () => {
  const [parentText, setParentText] = useState("Hello eDeliens");
  const changeParent = (text) => setParentText(text);
  return (
    <div className="parent">
      <h3>Parent Component</h3>
      <h1>{parentText}</h1>
      <Child change={changeParent}></Child>
    </div>
  );
};

export default Parent;
