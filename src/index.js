import React from "react";
import ReactDOM from "react-dom";

import MemoryGame from "./MemoryGame";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <>
      <header>
        <h1>Jogo da Memória</h1>
      </header>
      <div>
        <MemoryGame />
      </div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
