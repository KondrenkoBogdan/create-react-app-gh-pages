import {clickActionCreator, plusHealthActionCreator, plusMoneyActionCreator, plusHealthAreaActionCreator, plusMoneyAreaActionCreator, buyItem, maxValueMoney, maxValueHealth } from "../../redux/gameReducer"
import Game from "./game";
import { connect } from "react-redux";
import {withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { getGamePage, getUserName } from "../../common/selectors/gamePageSelectors";

let mapStateToProps = (state) => {
    return {
        gamePage: getGamePage(state),
        userName: getUserName(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        maxValueMoney,
        maxValueHealth,
        click: clickActionCreator,
        plusHealth: plusHealthActionCreator,
        plusMoney: plusMoneyActionCreator,
        plusHealthArea: plusHealthAreaActionCreator,
        plusMoneyArea: plusMoneyAreaActionCreator,
        buyItem
    }),
    withAuthRedirect
    )(Game);