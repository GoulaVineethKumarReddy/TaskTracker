import Task from "./Task";

const TaskList = ({tasks,onDelete}) => {
  return (
    <ol>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete}/>
        ))}
    </ol>
  )
}

export default TaskList
