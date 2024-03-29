import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hi 1111",
                    likesCount: 12,
                },
                {
                    id: 2,
                    message: "Hello 22222",
                    likesCount: 123,
                },
                {
                    id: 3,
                    message: "How are you? 33333333",
                    likesCount: 34,
                },
                {
                    id: 4,
                    message: "Yo-yo-yo 444444444",
                    likesCount: 48,
                },
                {
                    id: 5,
                    message: "I will back 55555555",
                    likesCount: 64,
                },
                {
                    id: 6,
                    message: "Astalavista Baby 66666",
                    likesCount: 17,
                },
                {
                    id: 7,
                    name: "How old are you 777777777",
                    likesCount: 99,
                },
                {
                    id: 8,
                    message: "What is your favorite book? 8888",
                    likesCount: 127,
                },
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Vovanec",
                },
                {
                    id: 2,
                    name: "Svetlana",
                },
                {
                    id: 3,
                    name: "Timka",
                },
                {
                    id: 4,
                    name: "Beta",
                },
                {
                    id: 5,
                    name: "Alfa",
                },
                {
                    id: 6,
                    name: "Mikki",
                },
                {
                    id: 7,
                    name: "Madlena",
                },
                {
                    id: 8,
                    name: "Alica",
                },
            ],
            messages: [
                {
                    id: 1,
                    message: "Hi",
                },
                {
                    id: 2,
                    message: "Hello",
                },
                {
                    id: 3,
                    message: "How are you?",
                },
                {
                    id: 4,
                    message: "Yo-yo-yo",
                },
                {
                    id: 5,
                    message: "I will back",
                },
                {
                    id: 6,
                    message: "Astalavista Baby",
                },
                {
                    id: 7,
                    name: "How old are you",
                },
                {
                    id: 8,
                    message: "What is your favorite book?",
                },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // _addPost() {
    //     let newPost = {
    //         id: 9,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };

    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },

    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

    // dispatch(action) {
    //     if (action.type === "ADD-POST") {
    //         this._addPost();
    //     } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //         this._updateNewPostText(action.newText);
    //     }
    // },
};

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST,
//     };
// };
// export const updateNewPostTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text,
//     };
// };

export default store;
