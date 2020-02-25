import React from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateTaskModal from "./CreateTaskModal";



function ListButton(){
    const iconMargin = {
        marginLeft: "147px"
      }


      
return (<div>
            <button type="button" class="btn btn-primary list-group-item list-button" data-toggle="modal" data-target="#createTaskModal">
                <li>
                    Add Task...
                    <AddBoxIcon style = {iconMargin} />
                </li>

            </button>
            <CreateTaskModal/>
        </div>);
}



export default ListButton;