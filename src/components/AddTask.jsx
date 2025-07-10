import { useState } from "react";

const AddTask = ({onAdd})=>{

    const[task,setTask] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!task.trim()) return;
        onAdd(task);
        setTask('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                ></input>
                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default AddTask;
