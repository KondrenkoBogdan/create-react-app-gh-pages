import React from "react";
import s from "./game.module.css";
import Shop from "./shopPlace/shop";
import GamePlace from "./gamePlace/gamePlace";


const Game = (props) => {

    return (
        <div className={s.game}>
            <Shop {...props} />
            <GamePlace
                {...props}
                 />
        </div>
    );
}

export default Game;