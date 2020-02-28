import React from "react";
import TaskContentArea from "../Tasks/TaskContentArea";
function ViewTaskModel(props){
    return(
        <div className="modal fade" id={`viewTaskModal-${props.id}`} tabIndex="-1" role="dialog"
             aria-labelledby={`viewTaskModal-${props.id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title view-task-name" id={`viewTaskModal-${props.id}-title`} contentEditable="true" >{props.taskName}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <TaskContentArea taskDesc = {props.taskDesc}/>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger">Delete Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTaskModel;