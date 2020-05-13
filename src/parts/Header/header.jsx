import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return <div>
        <div className={s.header}> 
            <div className={s.nameDiv}>
                <NavLink className={s.name} to="/home">DIVINE CLICKER</NavLink>
            </div>
            <div className={s.line}></div>
            <div className={`${s.gameDiv} ${s.secondaryFunctions}`}>
                <NavLink className={`${s.game} ${s.secondary}`} to="/game">Game</NavLink>
            </div>
            <div className={`${s.socialDiv} ${s.secondaryFunctions}`}>
                <NavLink className={`${s.social}  ${s.secondary}`} to="/social">Social</NavLink>
            </div>
            <div className={`${s.friendsDiv} ${s.secondaryFunctions}`}>
                <NavLink className={`${s.friends} ${s.secondary}`} to="/users">Users List</NavLink>
            </div>
            <div className={`${s.aboutDiv} ${s.secondaryFunctions}`}>
                <NavLink className={`${s.about} ${s.secondary}`} to="/user">USER</NavLink>
            </div>
            <div className={s.loginDiv}>
                {props.isAuth ? <div><NavLink to={"/user/" + props.id } className={s.loginPlace}> god:<span className={s.loginName}>{props.login}</span> </NavLink><button className={s.logOutButton} onClick={props.logOutThunkCreator}>LogOut</button></div> : <NavLink to="/login" className={s.login}>LogIn</NavLink> }
            </div>
        </div>
        <div className={s.vertLine}></div>
    </div>  
}

export default Header;