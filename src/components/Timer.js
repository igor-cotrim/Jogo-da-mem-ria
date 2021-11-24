
import React from "react";
  
export default function Timer(props) {
  return (
    <div className="timer">
      <span>
        {("00" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:
      </span>
      <span>
        {("00" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span>
        {("00" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
    </div>
  );
}