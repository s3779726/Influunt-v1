import React from "react";

function Task(props){

    return ( <li className="list-group-item">{props.taskName}</li>);
}

export default Task;