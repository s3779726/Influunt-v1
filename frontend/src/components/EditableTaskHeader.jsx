import React, {useState} from "react";
import ContentEditable from "react-contenteditable";
function EditableTaskHeader(props){

    const [htmlState, setHtmlState] = useState({
        html: `<h5 className="modal-title view-task-name" id={\`viewTaskModal-${props.id}-title\`} >${props.taskName}</h5>`,
        // descHtml: `<p id="task-desc">${props.taskDesc}</p>`
    });

    const contentEditable = React.createRef();


    function handleChange(event){
        const {value} = event.target;
       setHtmlState((prevValue) =>{
            return {html:`<h5 className="modal-title view-task-name" id={\`viewTaskModal-${props.id}-title\`} >${value}</h5>`};
        });
    }

    return (<ContentEditable

className="view-task-name"
        innerRef={contentEditable}
        html={htmlState.html} // innerHTML of the editable div
        disabled={false}       // use true to disable editing
        onChange={handleChange} // handle innerHTML change // Use a custom HTML tag (uses a div by default)
    />);
}

export default EditableTaskHeader;