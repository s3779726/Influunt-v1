import React, {useState} from "react";
function CreateTaskModal(){

    const [task, setTask] = useState({
        name:"",
        desc:""

    });

    function handleChange(e){
        const {name, value} = e.target;
        setTask((prevValue) => {
           return {...prevValue, [name]:value};

        });
    }

    function handleClick(e){
        e.preventDefault();
        console.log(task);
    }


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
                <label htmlFor="taskName"  className="col-form-label" >Task Name:</label>
                <input type="text" onChange = {handleChange}  name = "name" className="form-control"/>
              </div>
             <div className="form-group">
              <label htmlFor="message-text"   className="col-form-label" >Task Desc:</label>
              <textarea className="form-control"  onChange = {handleChange} name = "desc" rows="7"/>
              
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick = {handleClick} className="btn btn-primary">Add Task</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default CreateTaskModal;