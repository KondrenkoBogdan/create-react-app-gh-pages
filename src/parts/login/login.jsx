import React from "react";
import s from "./login.module.css";
import { reduxForm } from "redux-form";
import { requiredField, emailValidation} from "../../common/validators/validators";
import { inputFormControl, fieldCreator } from "../../common/FormControls/FormsControl";

const LoginForm = ({ handleSubmit, error, captcha}) => {
    return (
        <form onSubmit={handleSubmit}>
            {fieldCreator(inputFormControl, [requiredField, emailValidation], "email", "text", "Login", null, s.loginForm)}
            {fieldCreator(inputFormControl, [requiredField], "password", "password", "Password", null, s.loginForm)}
            <div className={s.checkboxDiv}>
                <label className={s.container}>Remember Me
                    <input type="checkbox" name="rememberMe" />
                    <span className={s.checkmark}></span>
                </label>
            </div>
            {error && <div>{error}</div>}
            {captcha && <>
            <img alt="captcha" src={captcha} style={{margin: "10px 0 0 0"}}/>
            {fieldCreator(inputFormControl, [requiredField], "captcha", "text", "Type captha", null, s.loginForm)}
            </>}
            <div className={s.butDiv}>
                <button className={s.but}>LOGIN</button>
            </div>
            <div>
                <h4>If you are not registered, do it <a className={s.doItHere} href="https://social-network.samuraijs.com/signUp">HERE</a></h4>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = ({ loginThunkCreator, captcha }) => {

    const onSubmit = (formData) => {
        debugger
        loginThunkCreator(formData);
    }

    return (<div className={s.fullObject}>
        <div className={s.place}>
            <h3 className={s.reg}>Login to join</h3>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit} />
        </div>
        </div>
    );
}

export default Login;