import React from "react";
import s from "./FormControl.module.css";
import { Field } from "redux-form"

export const textareaFormControl =({input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div >
                <textarea className={hasError ? s.error : null} {...input} {...props} />
            </div>
            {hasError && <span className={s.someError}>{meta.error}</span>}
        </div>
    )
}

export const inputFormControl = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span className={s.someError}>{meta.error}</span>}
        </div>
    )
}

export const fieldCreator = (component, validators, name, type, placeholder, text, className) => {
    return <div>
        <Field
            component={component}
            validate={validators}
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}/>{text}
    </div>
}