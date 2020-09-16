import React, {useEffect, useState} from "react";
import axios from "axios";


function CreateTaskModal(props){


    const [task, setTask] = useState({
        taskName:"",
        content:""

    });
// stores the new task as a state and updates it as the user types in information
    function handleChange(e){
        const {name, value} = e.target;
        setTask((prevValue) => {
           return {...prevValue, [name]:value};

        });
    }
//updates the database and adds task to list
    function handleClick(e){
        e.preventDefault();
        const bodyData = {
          tasks:[...props.tasks, task]
        };




        axios.patch(`/lists/${props.listId}`, bodyData)
            .then(function (response) {

                axios.get(`/lists/${props.listId}`)

                    .then(function(response){
                        const [responseData] = response.data;
                        props.setTasks(responseData.tasks);

                    })
                    .catch(function(error){
                        console.log(error);

                    });

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

                setTask({
                    taskName:"",
                    content:""
                });




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
                <input type="text" onChange = {handleChange}  autoComplete="off" name = "taskName" className="form-control" value = {task.taskName}/>
              </div>
             <div className="form-group">
              <label htmlFor="message-text"   className="col-form-label" >Description:</label>
              <textarea className="form-control"  onChange = {handleChange} name = "content" rows="7" value={task.content}/>
              
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