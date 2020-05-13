import gameReducer from "./gameReducer";
import socialReducer from "./socialReducer";

let store = {
    _rerenderEntireTree() {
    },
    subscriber(observ) {
        this._rerenderEntireTree = observ;
    },

    _state: {
        socialPage: {
            postData: [
                { name: "Ксюша", likes: "9", message: "Я люблю щипать Богдана за жопу и его тоже люблю" }
            ],
            newPostText: ""
        },
        gamePage: {
            shopItems: [
                { name: "Comon Cover", price: 100, effect: "+100 Health Points", effectCaption: "This cover is unbeliveble ... bla bla lba Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique, eligendi quas earum veritatis cum" },
                { name: "Common sword", price: 100, effect: "+100 Attack", effectCaption: "This sword is unbeliveble ... bla bla lba Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique, eligendi quas earum veritatis cum" },
                { name: "Updater", price: 1000, effect: "+1 Click Count / Click", effectCaption: "This updater is unbeliveble ... bla bla lba Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique, eligendi quas earum veritatis cum" }
            ],
            gameData: { hp: 0, money: 0, clickCount: 0 },
            plusHealthNum: 1,
            plusMoneyNum: 1
        },
        friendsPage: {
            friendsData: [
                { id: 1, name: "Нурмагомед Шарипов", money: 777, hp: 1337, clickCount: 999 },
                { id: 2, name: "Ксюша Свитенко  ", money: 1337, hp: 56, clickCount: 126 },
                { id: 3, name: "Богдан Кондренко", money: 359, hp: 27, clickCount: 342 },
                { id: 4, name: "Василий Вакуленко", money: 907, hp: 7, clickCount: 99 }
            ]
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        gameReducer(this._state.gamePage, action);
        socialReducer(this._state.socialPage, action);
        this._rerenderEntireTree();
    }
}

// export default store;