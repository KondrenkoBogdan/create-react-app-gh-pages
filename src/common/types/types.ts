import {AuthReducerInitialStateType} from "../../redux/auth-reducer";
import {GameReducerInitialStateType} from "../../redux/gameReducer";
import {FriendsReducerInitialStoreType} from "../../redux/friendsReducer";
import {UserReducerInitialStateType} from "../../redux/userReducer";
import {SocialReducerInitialStateType} from "../../redux/socialReducer";

export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    name: string,
    uniqueUrlName?: any,
    lookingForAJob?: true,
    lookingForAJobDescription?: "не ищу, а дурачусь"|null,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean,
    contacts?: ContactsType
}
export type StateType = {
    gamePage: GameReducerInitialStateType,
    socialPage: SocialReducerInitialStateType,
    friendsPage: FriendsReducerInitialStoreType,
    userPage: UserReducerInitialStateType,
    auth: AuthReducerInitialStateType,
    form: any
}

