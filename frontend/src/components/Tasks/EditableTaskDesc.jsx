import React, {useState} from "react";
import ContentEditable from "react-contenteditable";
function EditableTaskDesc(props){

    const [htmlState, setHtmlState] = useState({

        html: `${props.taskDesc}`
    });

    const contentEditable = React.createRef();


    function handleChange(event){
        const {value} = event.target;

        setHtmlState((prevValue) =>{
            return {html:`${value}`};
        });
        props.editTaskValues("content", value);
    }
    function handleFocusOut(){

        props.editTaskArray();

    }

    return (<ContentEditable
        name = "content"
        className="view-task-modal"
        innerRef={contentEditable}
        html={htmlState.html} // innerHTML of the editable div
        disabled={false}       // use true to disable editing
        onChange={handleChange} // handle innerHTML change // Use a custom HTML tag (uses a div by default)
        onBlur = {handleFocusOut}
    />);
}

export default EditableTaskDesc;