import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";

function renderMyComp() {
  const element = (
    <div>
      <h1>Welcome to React 🔥</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(renderMyComp, 1000);
