import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateTaskModal from "../Modals/CreateTaskModal";
import Task from "./Task";


//refers to the Add task button may need to rename for clarity since technically all of the list items are buttons
function AddTaskButton(props){


      const dataTarget = `#createTaskModal-${props.listId}`;
return (<div>
            <button type="button" className="btn btn-primary list-group-item add-task-button" data-toggle="modal" data-target={dataTarget}>
                <li>
                    Add Task...
                    <AddBoxIcon  className="icon-margin" />
                </li>

            </button>
            <CreateTaskModal listId = {props.listId} tasks = {props.tasks} onClick={props.addTask}  setTasks = {props.setTasks}/>
        </div>);
}



export default AddTaskButton;