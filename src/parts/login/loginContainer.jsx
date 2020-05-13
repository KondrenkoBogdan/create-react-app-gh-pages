import { loginThunkCreator } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import Login from "./login";
import { withRedirectToUserPage } from "../../HOC/withRedirectToUserPage";

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}


const ConnectLoginContainer = connect(mapStateToProps,{
    loginThunkCreator
})(Login)

const ConnectLoginContainerPlus = withRedirectToUserPage(ConnectLoginContainer)


export default ConnectLoginContainerPlus