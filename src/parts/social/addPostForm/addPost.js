import React, {useEffect} from "react"
import {reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../common/validators/validators";
import {textareaFormControl, fieldCreator} from "../../../common/FormControls/FormsControl";


const maxLength300 = maxLengthCreator(300);

const AddPost = ({handleSubmit, reset, length}) => {

    useEffect(() => {
        reset();
    }, [length])

    return (
        <form onSubmit={handleSubmit}>
            {fieldCreator(textareaFormControl, [requiredField, maxLength300], "newPostMessage", null, "Type something . . .", null)}
            <button>Add Post</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "AddPost"})(AddPost)

export default AddPostReduxForm