import { IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";


const TaskEdit = ({task, handleTaskEdit, setEditMode}) => {

    const [tempName, setTempName] = useState(task.name)

    const handleClick = () => {
        handleTaskEdit(task.id, null, tempName, null)
        setEditMode(false)
    }

    return(
        <>
            <input value={tempName} onChange={(e) => setTempName(e.target.value)}/>
            <input type="date" value={task.dueDate} />
            <IconButton onClick={handleClick}>
                <SaveIcon />
            </IconButton>
        </>
    )
}
export default TaskEdit