import React from "react";
import preloaderImg from "../../common/img/480 (2).gif";
import s from "./preloader.module.css";


const Preloader = () => {
    return (<div className={s.preloaderDiv}>
        <img alt="Loading" className={s.preloaderDog} src={preloaderImg} />
    </div>
    )
}

export default Preloader;