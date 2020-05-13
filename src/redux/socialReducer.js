const ADD_POST = "ADD-POST";
const DEL_POST = "DEL-POST";

export const addPostFunctionActionCreator = (newPostMessage, userName) => {
    return {type: ADD_POST, newPostMessage, userName}
}
export const deletePostFunctionActionCreator = (postId) => {
    return {type: DEL_POST, postId}
}
let initialState = {
    postData: [
        {id: 1, name: "Ксюша", likes: "9", message: "Я люблю щипать Богдана за жопу и его тоже люблю"},
        {id: 2, name: "Вася", likes: "777", message: "У меня смешное имя"},
        {id: 3, name: "Богдан", likes: "2", message: "Я люблю Ксюшеньку Свитенко !"}
    ]
}
const socialReducer = (state = initialState, action) => {

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