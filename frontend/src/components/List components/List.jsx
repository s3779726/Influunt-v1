import React, {useEffect, useState} from "react";
import ListButton from "./ListButton"
import ListHeader from "./ListHeader";
import Task from "./Task";
import axios from "axios";



function List(props){

    const [tasks, setTask] = useState([]);

    useEffect(() =>{
        axios.get(`/lists/${props.id}`)

            .then(function(response){
                const [responseData] = response.data;
                setTask(responseData.tasks);

        })
            .catch(function(error){
                console.log(error);

        });
    },[props.id]);

    function addTask(task){
        setTask((prevValue) =>{
           return [...prevValue, task];
        });
    }


    return(
        <div className="card list list-width">
        <ListHeader id = {props.id} deleteList = {props.deleteList} listTitle = {props.listTitle}/>
        <ul className="list-group list-group-flush remove-list-bullet">
            {tasks.map((task) => {
               return <Task key = {task._id} id = {task._id} taskName = {task.taskName} taskDesc = {task.content}/>
            })}

          <ListButton listId = {props.id} tasks = {tasks} addTask={addTask}/>
          


        </ul>
      </div>
    );
}
export default List;