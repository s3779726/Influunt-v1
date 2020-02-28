import React from "react";
import ViewTaskModal from "../Modals/ViewTaskModal";

function Task(props){

    return (
            <div >
            <button className="list-group-item custom-list-item task list-button" data-toggle="modal" data-target="#exampleModalLong">
                <li> {props.taskName}</li>

            </button>
                <ViewTaskModal/>
            </div>



    );
}

export default Task;