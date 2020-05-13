import React, {useState} from "react"
import s from "./shop.module.css";
import cover from "../../../common/img/cover.png";
import {useEffect} from "react";


const Shop = (props) => {

    let [armor, setArmor] = useState(true)
    let [attack, setAttack] = useState(true)
    let [click, setClick] = useState(true)
    let [shopActive, setShopActive] = useState(true)
    let [shopList, setShopList] = useState(null)

    let getTypeOfItem = (type) => {
        if (type === "armor") {
            return armor
        } else if (type === "attack") {
            return attack
        } else {
            return click
        }
    };

    useEffect(() => {
        setShopList(props.gamePage.shopItems.map(item => (
            <div key={item.id} className={item.itemType + " " + s.item}>
                {getTypeOfItem(item.itemType) ? <h3 onClick={() => {
                    props.buyItem(item.type, item.price);
                }} className={s.shopItem + " " + colors(item.raryty)}>
                    <div className={s.inline + " " + s.left}>{item.price + "$"}</div>
                    <div className={s.inline + " " + s.right}>{item.name}</div>
                </h3> : null}
                <div className={s.effect}>
                    <div className={s.liner}>
                        <p className={s.liner}>Info about item:</p>
                    </div>
                    <h2 className={s.itemName}>{item.name}</h2>
                    <h2 className={s.cardTitle}>{item.effect}</h2>
                    <h4 className={s.cardCaption}>{item.effectCaption}</h4>
                    <img alt="Cover" src={cover} className={s.itemImg}/>
                    <div className={s.bottom}>
                        <p className={s.bottom}>Price: {item.price} $</p>
                    </div>
                </div>
            </div>
        )));
    }, [armor, attack, click])

    let shopToggle = () => {
        if (shopActive === false) {
            setShopActive(true)
        } else {
            setShopActive(false)
        }
    }

    let toggler = (type) => {
        setArmor(false);
        setClick(false);
        setAttack(false);
        if (type === "armor") {
            setArmor(true)
        } else if (type === "attack") {
            setAttack(true)
        } else if (type === "click") {
            setClick(true)
        } else {
            setArmor(true);
            setClick(true);
            setAttack(true);
        }
    }

    let colors = (raryty) => {
        if (raryty === "common") {
            return s.shopItemCommon
        } else if (raryty === "rare") {
            return s.shopItemRare
        } else if (raryty === "ultra") {
            return s.shopItemUltra
        } else if (raryty === "legendary") {
            return s.shopItemLeg
        } else if (raryty === "secretly") {
            return s.shopItemSecret
        }
    }

    return (
        <>
            {shopActive ? <div id="shop" className={s.shopPlace}>
                <div className={s.typeToggler}>
                    <span onClick={() => {
                        toggler("all")
                    }} className={s.typeToggler}> Look at all</span>
                </div>
                <div className={s.typeToggler}>
                    <span onClick={() => {
                        toggler("armor")
                    }} className={s.armorToggler + " " + s.typeToggler}>ARMOR</span>
                    <div className={s.vertLine}></div>
                    <span onClick={() => {
                        toggler("attack")
                    }} className={s.attackToggler + " " + s.typeToggler}>ATTACK</span>
                    <div className={s.vertLine}></div>
                    <span onClick={() => {
                        toggler("click")
                    }} className={s.clicksToggler + " " + s.typeToggler}>CLICKS</span>
                </div>
                {shopList}
            </div> : null}
            <button onClick={shopToggle} className={s.shopToggler}> SHOP</button>
        </>)
}

export default Shop