import { Checkbox, Stack } from "@mui/material"
import { useState } from "react"
import TaskView from "./TaskView/TaskView"
import TaskEdit from "./TaskEdit/TaskEdit"

const TaskItem = ({task, handleTaskEdit}) => {

    console.log('task',task)

    const [editMode, setEditMode] = useState(false)

    const handleCheckboxChange = (event) => {
        console.log('value',event.target.value)
        handleTaskEdit(task.id, event.target.checked)
    }

    return(
        <Stack direction={'row'}>
            <Checkbox checked={task.completed} onChange={handleCheckboxChange} />
            {editMode ? <TaskEdit task={task} handleTaskEdit={handleTaskEdit} setEditMode={setEditMode}/> : <TaskView task={task} setEditMode={setEditMode} />}
        </Stack>
    )

}
export default TaskItem