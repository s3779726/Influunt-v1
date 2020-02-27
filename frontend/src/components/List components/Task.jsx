import React from "react";

function Task(props){

    return ( <button className="list-group-item custom-list-item"> <li >{props.taskName}</li>  </button>);
}

export default Task;