import React, {useState} from "react";
import axios from "axios";
function CreateTaskModal(props){

    const [task, setTask] = useState({
        taskName:"",
        content:""

    });

    function handleChange(e){
        const {name, value} = e.target;
        setTask((prevValue) => {
           return {...prevValue, [name]:value};

        });
    }

    function handleClick(e){
        e.preventDefault();
        const bodyData = {
          tasks:[...props.tasks, task]
        };



        // const jsonData = JSON.stringify(bodyData);

        axios.patch(`/lists/${props.listId}`, bodyData)
            .then(function (response) {
                // handle success
                console.log(response);
                props.onClick(task);
                setTask({
                    taskName:"",
                    content:""
                });


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const modalId = `createTaskModal-${props.listId}`;
    return (
    
    <div className="modal fade"  id={modalId} tabIndex="-1" role="dialog" aria-labelledby="createTaskModalLabel" aria-hidden="true">
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
                <input type="text" onChange = {handleChange}  autoComplete="off" name = "taskName" className="form-control"/>
              </div>
             <div className="form-group">
              <label htmlFor="message-text"   className="col-form-label" >Break down the task into smaller steps:</label>
              <textarea className="form-control"  onChange = {handleChange} name = "content" rows="7"/>
              
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick = {handleClick} data-dismiss="modal" className="btn btn-primary">Add Task</button>
        </div>
      </div>
    </div>
  </div>

  );
}

export default CreateTaskModal;