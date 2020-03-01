import React from "react";

function DeleteModal(props){
    return (

        <div className="modal fade"  id={props.id} tabIndex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure you want to delete this {props.headerText}?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-footer">
                        <form>
                            <button onClick ={props.deleteFunctionality} type="submit" className="btn btn-danger" data-dismiss="modal">Yes, I'm sure</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeleteModal;
//{`list-${props.listId}`}