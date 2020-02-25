import React from "react";
function CreateTaskModal(){
    return (
    
    <div class="modal fade"  id="createTaskModal" tabindex="-1" role="dialog" aria-labelledby="createTaskModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createTaskModalLabel">Create a new Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
              <div class="form-group">
                <label for="taskName" class="col-form-label">Task Name:</label>
                <input type="text"  name = "taskName" class="form-control" id="taskName"/>
              </div>
             <div class="form-group">
              <label for="message-text" class="col-form-label">Task Desc:</label>
              <textarea class="form-control" id="message-text" rows="7"></textarea>
              
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default CreateTaskModal;