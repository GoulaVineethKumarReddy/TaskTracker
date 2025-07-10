import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App(){

  const [tasks,setTasks] = useState([]);

  const addTask = (text) =>{
    const newTask ={
      id:Date.now(),
      text,
    };
    setTasks([...tasks,newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return(
    <>
      <div style={{
          padding:'20px',
          fontFamily:'Ariel',
          }}>
        <h1>Task Tracker</h1>
        <AddTask onAdd={addTask}/>
        <TaskList tasks={tasks} onDelete={deleteTask}/>
        {tasks.length>0 && (
          <button
            onClick={clearAllTasks} 
            style={{
              marginTop:'10px',
              padding: '8px 12px',
              cursor: 'pointer',
              borderRadius: '5px'
            }}>
            Delete All Tasks
          </button>
        )
        }
      </div>

      
    </>
  );

}

export default App;
