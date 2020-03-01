import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteModal from "../Modals/DeleteModal";
import axios from "axios";
function DeleteListButton(props){
    const dataTarget = `#list-${props.listId}`;
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

    return (<div>
        <button className="btn btn-danger delete-list" data-toggle="modal" data-target={dataTarget}><DeleteForeverIcon/></button>

        <DeleteModal id={`list-${props.listId}`} headerText="list" deleteFunctionality={deleteList}/>

    </div>);
}

export default DeleteListButton;