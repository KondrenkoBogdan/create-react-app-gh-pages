import React, {useEffect} from 'react';
import './App.css';
import HeaderContainerConnect from './parts/Header/HeaderContainer';
import {Route, withRouter, Switch, HashRouter} from 'react-router-dom';
import Home from './parts/Home/Home';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Preloader from './parts/preloader/preloader';
import {initializedThunkCreator} from "./redux/auth-reducer"
import store from "./redux/redux-store";
// import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {withSuspense} from './HOC/withSuspense';
import Footer from './parts/Footer/Footer';

const GameContainer = React.lazy(() => import('./parts/game/gameContainer'));
const SocialContainer = React.lazy(() => import('./parts/social/socialContainer'));
const FriendsContainer = React.lazy(() => import('./parts/Friends/FriendsContainer'));
const UserContainer = React.lazy(() => import('./parts/User/userContainer'));
const ConnectLoginContainer = React.lazy(() => import('./parts/login/loginContainer'));


const App = (props) => {

    useEffect(() => {
        props.initializedThunkCreator()
    });

    if (!props.initialized) {
        return <Preloader/>
    } else {
        return (
            <div className="app-wrapper">
                <HeaderContainerConnect/>
                <Switch>
                    <Route exact path="/" render={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/social" render={withSuspense(SocialContainer)}/>
                    <Route path="/game" render={withSuspense(GameContainer)}/>
                    <Route path="/login" render={withSuspense(ConnectLoginContainer)}/>
                    <Route path="/user/:id?" render={withSuspense(UserContainer)}/>
                    <Route path="/users" render={withSuspense(FriendsContainer)}/>
                    <Route path="*" render={() => <div
                        style={{height: "600px", textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "gold", marginTop: "100px"}}>error 404, PAGE
                        NOT FOUND</div>}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        initialized: state.auth.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedThunkCreator})
)(App);

let MainApp = () => {
    return (<HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp