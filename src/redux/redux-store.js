import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gameReducer from "./gameReducer";
import socialReducer from "./socialReducer";
import friendsReducer from "./friendsReducer";
import userReducer from "./userReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    gamePage: gameReducer,
    socialPage: socialReducer,
    friendsPage: friendsReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

export default store;
