import React from "react";
import Task from "./Task";

function TaskList({tasks, handleClick1}) {
  let list = tasks.map((obj) => {
    return (
      <Task handleClick1={handleClick1} key={obj.text} category={obj.category} text={obj.text} />
    )
  })
  return (
    <div className="tasks">
      {list}
    </div>
  );
}

export default TaskList;
