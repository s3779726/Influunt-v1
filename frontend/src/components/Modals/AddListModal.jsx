import React from "react";
function AddListModal(){
    return (
    
        <div className="modal fade"  id="addListModal">
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addListLabel">Add a new List</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            </div>
            <div className="modal-body">
              <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="taskName" className="col-form-label">List Title:</label>
                    <input type="text"  name="listName" className="form-control"/>
                  </div>
            
              <button type="submit" className="btn btn-primary add-list-button">Add</button>

            </form>
            </div>
          </div>
        </div>
      </div>
    
      );
}
export default AddListModal;