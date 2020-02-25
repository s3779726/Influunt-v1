import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteListModal from "../Modals/DeleteListModal";
function DeleteListButton(props){
    const dataTarget = `#list-${props.listId}`
    return (<div>
        <button className="btn btn-danger delete-list" data-toggle="modal" data-target={dataTarget}><DeleteForeverIcon/></button>
        <DeleteListModal listId = {props.listId} deleteList = {props.deleteList} />

    </div>);
}

export default DeleteListButton;