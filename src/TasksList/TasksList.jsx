import TaskItem from "../TaskItem/TaskItem"

const TasksList = ({tasks, handleTaskEdit}) => {

    const items = tasks.map((task) => <TaskItem key={task.id} task={task} handleTaskEdit={handleTaskEdit}/>)

    return(
        <>
            {items}
        </>
    )
}
export default TasksList