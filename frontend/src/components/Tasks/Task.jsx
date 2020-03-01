import React from "react";
import ViewTaskModal from "../Modals/ViewTaskModal";

function Task(props){



    return (
            <div >
            <button className="list-group-item custom-list-item task list-button" data-toggle="modal" data-target={`#viewTaskModal-${props.id}`}>
                <li> {props.taskName}</li>

            </button>
                <ViewTaskModal taskName = {props.taskName} taskDesc = {props.taskDesc} id={props.id} tasks = {props.tasks} setTasks = {props.setTasks} listId = {props.listId} />
            </div>



    );
}

export default Task;