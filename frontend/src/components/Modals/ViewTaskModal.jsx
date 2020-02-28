import React, {useState} from "react";

import EditableTaskHeader from "../EditableTaskHeader";
import EditableTaskDesc from "../EditableTaskDesc";
function ViewTaskModel(props){


    return(
        <div className="modal fade" id={`viewTaskModal-${props.id}`} tabIndex="-1" role="dialog"
             aria-labelledby={`viewTaskModal-${props.id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <EditableTaskHeader taskName={props.taskName}/>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6 className="col-form-label">Description</h6>
                    <EditableTaskDesc taskDesc = {props.taskDesc}/>
                    </div>
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