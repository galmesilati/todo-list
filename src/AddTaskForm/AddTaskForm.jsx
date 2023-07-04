import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

const AddTaskForm = ({handleAddTask}) => {

    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleClick = () => {
        handleAddTask(task, dueDate)
        setTask("")
        setDueDate("")
    }

    return(
        <Stack direction={'row'}>
            <TextField  label="Enter task..." variant="standard" 
                InputLabelProps={{shrink: true, required: true}}
                value={task} 
                onChange={(e) => setTask(e.target.value)}/>

            <TextField type="date" label="Enter date..." variant="standard" 
                InputLabelProps={{ shrink: true, required: false }}
                value={dueDate} onChange={(e) => setDueDate(e.target.value)}
                />

            <Button onClick={handleClick}>ADD</Button>
        </Stack>
    )

}
export default AddTaskForm