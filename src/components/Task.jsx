const Task = ({task,onDelete})=>{

    return(
        <li>
            {task.text}
            &nbsp;&nbsp;
            <button onClick={()=>onDelete(task.id)}>X</button>
        </li>
    );
}

export default Task;