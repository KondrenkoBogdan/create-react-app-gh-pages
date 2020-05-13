export const setUserDataActionCreator = (id, email, login) => {
    return { type: SETUSERDATA, data: { id, email, login } }
}

let initialState = {
}

const authReducer = (state = initialState, action) => {

    let stateCopy = { ...state }
    stateCopy.id = { ...state.id }
    stateCopy.email = { ...state.email }
    stateCopy.login = { ...state.login }

    switch (action.type) {
        case SETUSERDATA:
            stateCopy.id = action.data.id;
            stateCopy.email = action.data.email;
            stateCopy.login = action.data.login;
            return stateCopy;
        default: return stateCopy;
    }
}




export default authReducer;