import React, {useState} from "react";

import EditableTaskHeader from "../Tasks/EditableTaskHeader";
import EditableTaskDesc from "../Tasks/EditableTaskDesc";
import DeleteTaskButton from "../Tasks/DeleteTaskButton";
import axios from "axios";
import List from "../List components/List";
function ViewTaskModel(props){


    const [editedTask, setEditedTask] = useState({
        taskName:props.taskName,
        content:props.taskDesc
    });

    function setEditTaskValues(name, value){

        const trimSpaces = value => {
            return value
                .replace(/&nbsp;/g, '')
                .replace(/&amp;/g, '&')
                .replace(/&gt;/g, '>')
                .replace(/&lt;/g, '<')
        };
        setEditedTask((prevValue) =>{
           return {...prevValue, [name]:trimSpaces(value)};
        });

    }

    function editTasksArray(){
        const taskIndex = props.tasks.findIndex((task) =>{
           return task._id === props.id;
        });
        props.tasks[taskIndex].taskName = editedTask.taskName;
        props.tasks[taskIndex].content = editedTask.content;
        props.setTasks((prevValue) =>{
            return [...prevValue];
        });
        updateTaskInDb();

    }
    function updateTaskInDb(){

        const bodyData = {
            tasks:[...props.tasks]
        };


        axios.patch(`/lists/${props.listId}`, bodyData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }





    return(
        <div className="modal fade" id={`viewTaskModal-${props.id}`} tabIndex="-1" role="dialog"
             aria-labelledby={`viewTaskModal-${props.id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <EditableTaskHeader taskName={props.taskName} editTaskValues = {setEditTaskValues} id ={props.id} tasks={props.tasks} editTaskArray = {editTasksArray}/>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6 className="col-form-label">Description</h6>
                    <EditableTaskDesc taskDesc = {props.taskDesc} editTaskValues = {setEditTaskValues} tasks={props.tasks} editTaskArray={editTasksArray}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <DeleteTaskButton  id = {props.id} deleteTask ={props.deleteTask} tasks = {props.tasks} listId={props.listId} listTitle={props.listTitle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTaskModel;