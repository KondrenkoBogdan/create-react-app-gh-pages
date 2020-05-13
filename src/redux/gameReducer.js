const CLICK_PLUS = "CLICK-PLUS";
const TO_MONEY = "TO-MONEY";
const TO_HEALTH = "TO-HEALTH";
const PLUS_MONEY_NUM = "PLUS-MONEY-NUM";
const PLUS_HEALTH_NUM = "PLUS-HEALTH-NUM";
const MAX_VALUE_MONEY = "MAX-VALUE-MONEY";
const MAX_VALUE_HEALTH = "MAX-VALUE-HEALTH";
const BUYITEM = "BUY-ITEM";

const armor = "armor"
const attack = "attack"
const click = "click"

const ADD_ARMOR = "ADD-ARMOR"
const ADD_ATTACK = "ADD-ATTACK"
const ADD_CPC = "ADD-CPC"

export const maxValueMoney = () => {
    return { type: MAX_VALUE_MONEY }
}
export const maxValueHealth = () => {
    return { type: MAX_VALUE_HEALTH }
}
export const clickActionCreator = () => {
    return { type: CLICK_PLUS }
}
export const plusHealthActionCreator = () => {
    return { type: TO_HEALTH }
}
export const plusMoneyActionCreator = () => {
    return { type: TO_MONEY }
}
export const plusHealthAreaActionCreator = (plusHealthNum) => {
    return {
        type: PLUS_HEALTH_NUM,
        plusHealthNum: plusHealthNum
    }
}
export const plusMoneyAreaActionCreator = (plusMoneyNum) => {
    return {
        type: PLUS_MONEY_NUM,
        plusMoneyNum: plusMoneyNum
    }
}
export const buyItem = (typeAction, price) => {
    return { type: BUYITEM, typeAction, price }
}

let initialState = {
    shopItems: [
        { name: "Wooden shield", id: 1, itemType: armor, price: 100, raryty: "common", type: { functionType: ADD_ARMOR, count: 10 }, effect: "+10 Armor", effectCaption: "This shield is not too bad ! " },
        { name: "Iron shield", id: 2, itemType: armor, price: 1000, raryty: "rare", type: { functionType: ADD_ARMOR, count: 100 }, effect: "+100 Armor", effectCaption: "This knightly shield give you armor !!!" },
        { name: "Golden Shield", id: 3, itemType: armor, price: 3000, raryty: "ultra", type: { functionType: ADD_ARMOR, count: 1000 }, effect: "+1000 Armor", effectCaption: "This royal shield add you unbelievably power... And some armor points )))" },
        { name: "DIVINE SHIELD", id: 4, itemType: armor, price: 7000, raryty: "legendary", type: { functionType: ADD_ARMOR, count: 10000 }, effect: "+10000 Armor", effectCaption: "This shield was lost by ZEUS, never can cope with this shield, except YOU  !!!" },
        { name: "Stick", id: 5, itemType: attack , price: 100, raryty: "common", type: { functionType: ADD_ATTACK, count: 10 }, effect: "+10 Attack", effectCaption: "Maybe you can bump a angry dog, BUT no more ...." },
        { name: "Wooden sword", id: 6, itemType: attack, price: 1000, raryty: "rare", type: { functionType: ADD_ATTACK, count: 100 }, effect: "+100 Attack", effectCaption: "Once, in childhood, I had such a sword, ohhh, my poor little brother..." },
        { name: "Iron sword", id: 7, itemType: attack, price: 3000, raryty: "ultra", type: { functionType: ADD_ATTACK, count: 1000 }, effect: "+1000 Attack", effectCaption: "You can kill somebody, be carefull" },
        { name: "DIVINE TRIDENT", id: 8, itemType: attack, price: 7000, raryty: "legendary", type: { functionType: ADD_ATTACK, count: 10000 }, effect: "+1000 Attack", effectCaption: "THIS IS THE TRIPPER OF MOST NEPTUNE, with him and sea and land fall to your knees !!!!! " },
        { name: "Simple Clicker Updatere", id: 9, itemType: click, price: 300, raryty: "common", type: { functionType: ADD_CPC, count: 1 }, effect: "+1 CPC", effectCaption: "I dont know what to say, this updater will add you one click per prick, I think, no more ... But maybe no )" },
        { name: "Improved Clicker Updatere", id: 10, itemType: click, price: 1000, raryty: "rare", type: { functionType: ADD_CPC, count: 5 }, effect: "+5 CPC", effectCaption: "More powerfull updater, and little profitable " },
        { name: "Unreal Clicker Updater", id: 11, itemType: click, price: 5000, raryty: "ultra", type: { functionType: ADD_CPC, count: 35 }, effect: "+35 CPC", effectCaption: "If you can by this updater, I think, your finger is tired." },
        { name: "DIVINE CLICKER UPDATER", id: 12, itemType: click, price: 20000, raryty: "legendary", type: { functionType: ADD_CPC, count: 170 }, effect: "+170 CPC", effectCaption: "I don't now who are you, If you can buy this sh*t ... " },
        { name: "SECRETLY UPDATER", id: 12, itemType: click, price: 70000, raryty: "secretly", type: { functionType: ADD_CPC, count: 777 }, effect: "+777 CPC", effectCaption: "You are realy mad, don't envy yours mouse ..." }
    ],
    gameData: { hp: 1, money: 500, clickCount: 0 },
    plusHealthNum: 1,
    plusMoneyNum: 1,
    cpc: 1,
    totalClicks: 0,
    attack: 1,
    armor: 0
}

const gameReducer = (state = initialState, action) => {
    let stateCopy = { ...state };

    switch (action.type) {
        case BUYITEM:
            if (stateCopy.gameData.money >= action.price) {
                if (action.typeAction.functionType === "ADD-ARMOR") {
                    stateCopy.armor = stateCopy.armor + action.typeAction.count;
                    stateCopy.gameData.money = stateCopy.gameData.money - action.price;
                } else if (action.typeAction.functionType === "ADD-ATTACK") {
                    stateCopy.attack = stateCopy.attack + action.typeAction.count;
                    stateCopy.gameData.money = stateCopy.gameData.money - action.price;
                } else {
                    stateCopy.cpc = stateCopy.cpc + action.typeAction.count;
                    stateCopy.gameData.money = stateCopy.gameData.money - action.price;
                }
            } else { alert("Not Anought Money") }
            return stateCopy;
        case CLICK_PLUS:
            stateCopy.totalClicks++;
            stateCopy.gameData.clickCount = stateCopy.gameData.clickCount + stateCopy.cpc;
            return stateCopy;
        case TO_MONEY:
            if (parseInt(stateCopy.plusMoneyNum) > 0 && stateCopy.gameData.clickCount >= parseInt(stateCopy.plusMoneyNum)) {
                stateCopy.gameData.money = stateCopy.gameData.money + parseInt(stateCopy.plusMoneyNum);
                stateCopy.gameData.clickCount = stateCopy.gameData.clickCount - stateCopy.plusMoneyNum;
            }
            return stateCopy;
        case TO_HEALTH:
            if (parseInt(stateCopy.plusHealthNum) > 0 && stateCopy.gameData.clickCount >= parseInt(stateCopy.plusHealthNum)) {
                stateCopy.gameData.hp = stateCopy.gameData.hp + parseInt(stateCopy.plusHealthNum);
                stateCopy.gameData.clickCount = stateCopy.gameData.clickCount - stateCopy.plusHealthNum;
            }
            return stateCopy;
        case PLUS_MONEY_NUM:
            stateCopy.plusMoneyNum = action.plusMoneyNum;
            return stateCopy;
        case PLUS_HEALTH_NUM:
            stateCopy.plusHealthNum = action.plusHealthNum;
            return stateCopy;
        case MAX_VALUE_MONEY:
            stateCopy.plusMoneyNum = stateCopy.gameData.clickCount;
            return stateCopy
        case MAX_VALUE_HEALTH:
            stateCopy.plusHealthNum = stateCopy.gameData.clickCount;
            return stateCopy
        default: return stateCopy;
    }
}
export default gameReducer;