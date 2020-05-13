import React from "react";
import s from "./gamePlace.module.css";
import robot from "../../../common/img/Cartoon_Robot.svg.png";


const GamePlace = ({maxValueMoney, maxValueHealth, click, plusHealth, plusMoney, plusHealthArea, plusMoneyArea, gamePage, userName}) => {
   
    let plusHealthNum = React.createRef();
    let plusMoneyNum = React.createRef();

    return (
            <div className={s.gamePlace}>
                <div className={s.infoBars}>
                    <span className={s.hpBar}>HP: {gamePage.gameData.hp}</span>
                    <span className={s.clickCount}>clicks: {gamePage.gameData.clickCount}</span>
                    <span className={s.money}>money: {gamePage.gameData.money}$</span>
                </div>
                <div className={s.nameDiv}>
                    <h1 style={{textTransform: "uppercase", color: "gold"}}>{userName}</h1>
                </div>
                <div className={s.hero}>
                    <img alt="Robot" className={s.robot} src={robot} />
                </div>
                <div className={s.clickButtonDiv}>
                    <div className={s.plusHealthDiv}>
                        <button onClick={plusHealth} className={s.toClickButton}>to Health</button>
                        <button onClick={() => {maxValueHealth()}} className={s.max}>MAX</button>
                        <br />
                        <input value={gamePage.plusHealthNum} ref={plusHealthNum} onChange={() => {plusHealthArea(plusHealthNum.current.value)}} className={s.plusHealthNumber} type="number"></input>

                    </div>
                    <button onClick={click} className={s.clickButton}>CLICK<br />{gamePage.cpc} cc/c</button>
                    <div className={s.plusMoneyDiv}>
                        <button onClick={() => {maxValueMoney()}} className={s.max}>MAX</button>
                        <button onClick={plusMoney} className={s.toClickButton}>to Money</button>
                        <br />
                        <input value={gamePage.plusMoneyNum} ref={plusMoneyNum} onChange={() => {plusMoneyArea(plusMoneyNum.current.value)}} className={s.plusMoneyNumber} type="number"></input>
                    </div>
                </div>
                <div className={s.totals}>
                    <span className={s.totalClicks}>Clicks: {gamePage.totalClicks} </span>
                    <span className={s.totalAttack}>Attack: {gamePage.attack} </span>
                    <span className={s.totalArmor}>Armor: {gamePage.armor} </span>
                </div>
            </div>
    );
}

export default GamePlace;