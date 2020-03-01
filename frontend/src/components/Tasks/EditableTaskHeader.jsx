import React, {useState} from "react";
import ContentEditable from "react-contenteditable";
function EditableTaskHeader(props){

    const [htmlState, setHtmlState] = useState({
        html: `<h5  className="modal-title view-task-name" id={\`viewTaskModal-${props.id}-title\`} >${props.taskName}</h5>`,

    });


    const contentEditable = React.createRef();


    function handleChange(event){
        const {value} = event.target;
        const innerHtml = value.replace(/<(.*?)>/g,"");

        if (value !== "") {
            setHtmlState({html: value});
        } else{

            setHtmlState( { html: `<h5  className="modal-title view-task-name" id={\`viewTaskModal-${props.id}-title\`} >${props.taskName}</h5>`});
        }

         props.editTaskValues("taskName", innerHtml);

    }
    function handleFocusOut(){

        props.editTaskArray();
    }

    return (<ContentEditable

        className="view-task-name"
        innerRef={contentEditable}
        html={htmlState.html} // innerHTML of the editable div
        disabled={false}       // use true to disable editing
        onChange={handleChange} // handle innerHTML change // Use a custom HTML tag (uses a div by default)
        onBlur={handleFocusOut}
    />);
}

export default EditableTaskHeader;