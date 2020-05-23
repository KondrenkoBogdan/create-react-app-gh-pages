import {addPostFunctionActionCreator, deletePostFunctionActionCreator} from "../../redux/socialReducer"
import Social from "./social";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getSocialPage} from "../../common/selectors/socialPageSelectors";
import {getUserName} from "../../common/selectors/authSelectors";

let mapStateToProps = (state) => {
    return {
        socialPage: getSocialPage(state),
        userName: getUserName(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        addPostFunction: addPostFunctionActionCreator,
        deletePostFunction: deletePostFunctionActionCreator
    })
)(Social);
