import React from "react";
import axios from "axios";
import List from "../List components/List";


function DeleteTaskButton(props){



    function deleteTask(){
        props.deleteTask(props.id);

        const newTasks = props.tasks.filter((task) => {
            return task._id !== props.id;
        });


        const bodyData = {
            listTitle:props.listTitle,
            tasks:newTasks
        };

        axios.put(`/lists/${props.listId}`, {bodyData})
            .then(function (response) {

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });


    }
    return (<div>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={deleteTask}>Delete Task</button>



    </div>)
}

export default DeleteTaskButton;