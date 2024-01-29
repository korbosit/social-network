import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 9,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.id != action.postId),
            };
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

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
});

// thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;
