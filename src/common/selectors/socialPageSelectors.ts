import {StateType} from "../types/types";
import {SocialReducerInitialStateType} from "../../redux/socialReducer";

export const getSocialPage = (state: StateType): SocialReducerInitialStateType => {
    return state.socialPage
}
