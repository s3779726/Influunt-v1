import React from "react";
import DeleteListButton from "./DeleteListButton";

function ListHeader(props){
    return (<div className="card-header list-header">
        <h5 className = "list-heading">{props.listTitle}</h5>
        <DeleteListButton listId = {props.id} deleteList = {props.deleteList}/>
    </div>);
}

export default ListHeader;