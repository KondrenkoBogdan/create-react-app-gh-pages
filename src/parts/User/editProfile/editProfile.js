import React from "react"
import s from "./editProfile.module.css"
import { reduxForm, Field } from "redux-form";
import { fieldCreator, textareaFormControl } from "../../../common/FormControls/FormsControl"
import {maxLengthCreator, requiredField} from "../../../common/validators/validators";

const maxLength100 = maxLengthCreator(100);

const EditProfile = ({ userInfo, handleSubmit, error }) => {

    return (<>
        <form onSubmit={handleSubmit}>
            <div className={s.placeName}>
                <div>Full Name:</div>
                {fieldCreator(textareaFormControl, [requiredField, maxLength100], "fullName", "text", "Your full name", null, userInfo.fullName)}
                <hr className={s.hr} />
            </div>
            <div className={s.placeName}>
                <div>About Me:</div>
                {fieldCreator(textareaFormControl, [requiredField], "aboutMe", "text", "Type some short text about YOU !", null, userInfo.aboutMe)}
                <hr className={s.hr} />
            </div>
            {userInfo.lookingForAJobDescription ? <div className={s.placeName}>
                <label className={s.container}>Looking for a job
                    <Field component="input" type="checkbox" name="lookingForAJob" />
                    <span className={s.checkmark}></span>
                </label>
            </div> : null}
            <div className={s.placeName}>
                <div>Looking for: </div>
                {fieldCreator(textareaFormControl, [], "lookingForAJobDescription", "text", "Type, what job you are looking", null, userInfo.lookingForAJobDescription)}
            </div>
            <hr className={s.hr} />
            <div className={s.placeName}>
                <div>Contacts <span className={s.simpleText}>(type just links, example: "YOUR-LINK.com")</span></div>
                <div className={s.contactsDiv}>
                    {Object.keys(userInfo.contacts).map(key => {
                        return <div key={key}> {key} :{fieldCreator(textareaFormControl, [], ("contacts." + key), "text", "Type, your " + key, null, userInfo.contacts.key)} </div>
                    })}
                </div>
            </div>
            {error && <div>{error}</div>}
            <div className={s.placeName} style={{ marginLeft: "30%" }}>

                <button className={s.saveButton}> SAVE </button>
            </div>
        </form>
    </>)
}

const EditProfileForm = reduxForm({ form: "EditProfileForm" })(EditProfile)

export default EditProfileForm;