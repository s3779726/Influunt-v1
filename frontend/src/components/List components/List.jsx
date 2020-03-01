import React, {useEffect, useState} from "react";
import AddTaskButton from "../Tasks/AddTaskButton"
import ListHeader from "./ListHeader";
import Task from "../Tasks/Task";
import axios from "axios";



function List(props){

    //stores state of tasks
    const [tasks, setTasks] = useState([]);

    //gets the lists from backend database
    useEffect(() =>{
        axios.get(`/lists/${props.id}`)

            .then(function(response){
                const [responseData] = response.data;
                setTasks(responseData.tasks);

        })
            .catch(function(error){
                console.log(error);

        });
    },[props.id]);

    function addTask(task){
        setTasks((prevValue) =>{
           return [...prevValue, task];
        });
    }

    return(
        <div className="card list list-width">
        <ListHeader id = {props.id} deleteList = {props.deleteList} listTitle = {props.listTitle}/>
        <ul className="list-group list-group-flush remove-list-bullet">
            {tasks.map((task) => {
               return <Task key = {task._id} id = {task._id} taskName = {task.taskName} taskDesc = {task.content} tasks = {tasks} setTasks = {setTasks} listId = {props.id}/>
            })}

          <AddTaskButton listId = {props.id} tasks = {tasks} addTask={addTask}/>
          


        </ul>
      </div>
    );
}
export default List;