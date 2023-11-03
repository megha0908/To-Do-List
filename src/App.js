// import "./styles.css";
// import React, { useState } from 'react';

// function Counter() {
//   const [count,setCount]=useState(0);
//   const incre = ()=>{
//     setCount(count+1);
//   };
//   const decre =()=>{
//     // console.log("hu")
//     setCount(count-1);
//   };
//   return (
//     <div>
//       <button onClick={incre}>Increment</button>
//       <button onClick={decre}>Decrement</button>
//       <p>Count: {count}</p>

//     </div>
//   );
// }

// export default Counter;

import React, { useState } from "react";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
