import React, {useState} from "react";


function NewTaskForm({category1}) {
  const [task, setTask] = useState("")
  const [submitTask, setSubmitTask] = useState([])

  const list = category1.filter((ele) => {
    return(
      ele !== "All"
    )
  })

  const options = list.map((ele) => {
    return(
      <option key={ele} value={ele}>{ele}</option>
    )
  })

  console.log(list)

  function onTaskFormSubmit(e){
    e.preventDefault()
    const formData = {task:task}
    const dataArray = [...submitTask, formData]
    setSubmitTask(dataArray)
    setTask('')
  }
  const listOfTasks = submitTask.map((data, index) => {
    return(
      <div key={index}>
       {data.task}
      </div>
    )
  })
  return (
   <>
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task} onChange={(e) => setTask(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={task} onChange={(e) => setTask(e.target.value)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
    {listOfTasks}
   </>
  );
}

export default NewTaskForm;

