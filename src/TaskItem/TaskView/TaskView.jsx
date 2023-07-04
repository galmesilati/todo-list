import { IconButton } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const TaskView = ({task, setEditMode}) => {
    return(
        <>
            <p>{task.name}</p>
            <p>{task.dueDate}</p>
            <IconButton onClick={() => setEditMode(true)}>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteOutlineIcon />
            </IconButton>
        </>
    )
}
export default TaskView