import React from "react";
import axios from "axios";
function DeleteListModal(props){


//performs a delete request to backend to delete entire list
    function deleteList(e){
      
        e.preventDefault();
        axios.delete(`/lists/${props.listId}`)
        .then(function(response){
            props.deleteList(props.listId);

        })
        .catch(function(err){
            console.log(err);
            
        });

    }

    return (
    
    <div className="modal fade"  id={`list-${props.listId}`} tabIndex="-1" role="dialog" aria-labelledby="deleteListModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="deleteListModalLabel">Are you sure you want to delete this list?</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-footer">
        <form>
          <button onClick ={deleteList} type="submit" className="btn btn-primary" data-dismiss="modal">Yes, I'm sure</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  );
}

export default DeleteListModal;