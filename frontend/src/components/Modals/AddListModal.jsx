import React, {useState} from "react";
import axios from "axios";
function AddListModal(){

    const [listTitle, setListTitle] = useState("");


    function handleChange(event){
        const enteredListTitle = event.target.value;
        setListTitle(enteredListTitle);
        console.log(listTitle);
    }

    function handleSubmit(e){
        e.preventDefault();
        const bodyFormData = {
            listTitle: listTitle
        }
        
        
        axios.post('/lists', bodyFormData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          
    }

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
              <form onSubmit = {handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="taskName" className="col-form-label">List Title:</label>
                    <input onChange = {handleChange} type="text"  name="listTitle" className="form-control" autoComplete="off"/>
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