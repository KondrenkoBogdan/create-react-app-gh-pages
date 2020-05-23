import {StateType} from "../types/types";
import {GameReducerInitialStateType} from "../../redux/gameReducer";

export const getGamePage = (state: StateType): GameReducerInitialStateType=> {
    return state.gamePage
}

