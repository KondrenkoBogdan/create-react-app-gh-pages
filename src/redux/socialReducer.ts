const ADD_POST = "ADD-POST";
const DEL_POST = "DEL-POST";

type addPostFunctionActionCreatorType = {
    type: typeof ADD_POST,
    newPostMessage: string,
    userName: string
}
export const addPostFunctionActionCreator = (newPostMessage:string, userName:string): addPostFunctionActionCreatorType => {
    return {type: ADD_POST, newPostMessage, userName}
}

type deletePostFunctionActionCreatorType = {
    type: typeof DEL_POST,
    postId: number
}
export const deletePostFunctionActionCreator = (postId:number) => {
    return {type: DEL_POST, postId}
}


let initialState = {
    postData: [
        {id: 1, name: "Ксюша", likes: "9", message: "Я люблю щипать Богдана за жопу и его тоже люблю"},
        {id: 2, name: "Вася", likes: "777", message: "У меня смешное имя"},
        {id: 3, name: "Богдан", likes: "2", message: "Я люблю Ксюшеньку Свитенко !"}
    ]
}
export type SocialReducerInitialStateType = typeof initialState;

const socialReducer = (state = initialState, action: any): SocialReducerInitialStateType => {

    let stateCopy = {...state};
    stateCopy.postData = [...state.postData];

    switch (action.type) {
        case DEL_POST:
            stateCopy.postData = stateCopy.postData.filter(post => post.id !== action.postId)
            return stateCopy
        case ADD_POST: {
            let newPost = {
                id: stateCopy.postData[0] ? (state.postData[state.postData.length - 1].id) + 1 : 1 ,
                name: action.userName,
                likes: "0",
                message: action.newPostMessage
            };
            stateCopy.postData.push(newPost);
            return stateCopy;
        }
        default:
            return stateCopy;
    }
};

export default socialReducer;
