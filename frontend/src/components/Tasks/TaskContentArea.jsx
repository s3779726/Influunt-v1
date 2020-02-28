import React from "react";
function TaskContentArea(props) {
    return (<div className="modal-body">
        <h6 className="col-form-label">Description</h6>
        <div className="view-task-modal" contentEditable="true">
            <p>{props.taskDesc}</p>
        </div>

    </div>);
}

export default TaskContentArea;