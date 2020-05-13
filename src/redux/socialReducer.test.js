import socialReducer, { deletePostFunctionActionCreator, addPostFunctionActionCreator } from "./socialReducer";

let state = {
    postData: [
        { id: 1, name: "Ксюша", likes: "9", message: "Я люблю щипать Богдана за жопу и его тоже люблю" },
        { id: 2, name: "Вася", likes: "777", message: "У меня смешное имя" },
        { id: 3, name: "Будей", likes: "4", message: "Я конченый мудак" },
    ]
}

it("Post should be added", () => {

    let action = addPostFunctionActionCreator("Hello, Ksenia")

    let newState = socialReducer(state, action)

    expect(newState.postData.length).toBe(4)
})

it("Post body is corret", () => {

    let action = addPostFunctionActionCreator("Hello, Ksenia")

    let newState = socialReducer(state, action)

    expect(newState.postData[3].message).toBe("Hello, Ksenia")
})

it("Post should be deleted", () => {

    let action = deletePostFunctionActionCreator(3)

    let newState = socialReducer(state, action)

    expect(newState.postData.length).toBe(2)
})
