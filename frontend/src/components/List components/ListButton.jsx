import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateTaskModal from "../Modals/CreateTaskModal";



function ListButton(props){


      const dataTarget = `#createTaskModal-${props.listId}`;
return (<div>
            <button type="button" className="btn btn-primary list-group-item list-button" data-toggle="modal" data-target={dataTarget}>
                <li>
                    Add Task...
                    <AddBoxIcon  className="icon-margin" />
                </li>

            </button>
            <CreateTaskModal listId = {props.listId} tasks = {props.tasks} onClick={props.addTask}/>
        </div>);
}



export default ListButton;