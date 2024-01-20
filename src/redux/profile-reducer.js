const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
            message: "How old are you 777777777",
            likesCount: 99,
        },
        {
            id: 8,
            message: "What is your favorite book? 8888",
            likesCount: 127,
        },
    ],
    newPostText: "it-kamasutra.com",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 9,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 9,
    //         message: state.newPostText,
    //         likesCount: 0,
    //     };

    //     state.posts.push(newPost);
    //     state.newPostText = "";
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
