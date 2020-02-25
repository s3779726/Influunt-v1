import React from "react";
function CreateTaskModal(){
    return (
    
    <div className="modal fade"  id="createTaskModal" tabIndex="-1" role="dialog" aria-labelledby="createTaskModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createTaskModalLabel">Create a new Task</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
              <div className="form-group">
                <label htmlFor="taskName" className="col-form-label">Task Name:</label>
                <input type="text"  name = "taskName" className="form-control"/>
              </div>
             <div className="form-group">
              <label htmlFor="message-text" className="col-form-label">Task Desc:</label>
              <textarea className="form-control" rows="7"></textarea>
              
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default CreateTaskModal;