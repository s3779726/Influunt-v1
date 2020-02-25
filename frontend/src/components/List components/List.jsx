import React from "react";
import ListButton from "./ListButton"

import DeleteListButton from "./DeleteListButton";


function List(props){
    const widthOfList = {
        width:"18rem"
    }
    

    return(
        <div className="card list" style={widthOfList}>
        <div className="card-header list-header">
          <h5 className = "list-heading">{props.listTitle}</h5>
         <DeleteListButton listId = {props.id} deleteList = {props.deleteList}/>
        </div>
        <ul className="list-group list-group-flush remove-list-bullet">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
          <ListButton/>
          


        </ul>
      </div>
    );
}
export default List;