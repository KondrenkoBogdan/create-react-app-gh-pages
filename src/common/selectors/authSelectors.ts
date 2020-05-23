import {StateType} from "../types/types";

export const getUserName = (state: StateType): string | null => {
    return state.auth.login
}
export const getMyId = (state: StateType): number | null => {
    return state.auth.id
}
