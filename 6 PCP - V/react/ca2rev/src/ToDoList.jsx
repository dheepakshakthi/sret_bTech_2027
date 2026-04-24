import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function moveTaskUp(index) {
    if (index === 0) return; // Can't move the first task up
    const newTasks = [...task];
    [newTasks[index - 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index - 1],
    ];
    setTask(newTasks);
  }

  function moveTaskDown(index) {
    if (index === task.length - 1) return; // Can't move the last task down
    const newTasks = [...task];
    [newTasks[index], newTasks[index + 1]] = [
      newTasks[index + 1],
      newTasks[index],
    ];
    setTask(newTasks);
  }

  return (
    <div>
      <h1> FKIN TODO APP</h1>
      <input
        type="text"
        placeholder="Enter new Task"
        value={newTask}
        onChange={handleInputChange}
        id="inputTask"
      ></input>
      <button
        onClick={() => {
          setTask([...task, newTask]);
          setNewTask("");
        }}
      >
        Add Task
      </button>

      <ol>
        {task.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => setTask(task.filter((_, i) => i !== index))}>
              Delete
            </button>
            <button onClick={() => moveTaskUp(index)}>move up</button>
            <button onClick={() => moveTaskDown(index)}>move down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
