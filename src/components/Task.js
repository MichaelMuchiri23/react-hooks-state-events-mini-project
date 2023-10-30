import React from "react";

function Task({category, text, handleClick1}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick1} className="delete">X</button>
    </div>
  );
}

export default Task;
