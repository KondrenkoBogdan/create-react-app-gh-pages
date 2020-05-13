import React from "react";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div className={s.homePlace}>
            <h1 className={s.welcomeTitle}>Welcome to the my portfolio site !!!</h1>
            <p className={s.description}>
            <NavLink to="/game"><strong>GAME</strong></NavLink> - page, where you can play simple clicker game !  
            </p>
            <p className={s.description}>
            <NavLink to="/social"><strong>SOCIAL</strong></NavLink> - page, here you can write a short message to publish, buy Its work just localy, so other users can't look for you message (((
            </p>
            <p className={s.description}>
            <NavLink to="/login"><strong>LogIn</strong></NavLink> - if you don't authtorized, visit this page ! 
            </p>
        </div>
    );
}

export default Home;