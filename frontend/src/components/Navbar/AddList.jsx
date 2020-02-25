import React from "react";
import AddListModal from "../Modals/AddListModal";

function AddList(){
return (
<div>
    <ul className = "navbar-nav">
        <li className = "nav-item">
            <button type="button" className="btn nav-link" data-toggle="modal" data-target="#addListModal">
                Add List
            </button>
        </li>
    </ul>
    <AddListModal/>
</div>


);
}

export default AddList;