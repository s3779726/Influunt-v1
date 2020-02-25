import React from "react";
import ListButton from "./ListButton"


function List(props){
    const widthOfList = {
        width:"18rem"
    }
    

    return(
        <div className="card list" style={widthOfList}>
        <div className="card-header">
          {props.listTitle}
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