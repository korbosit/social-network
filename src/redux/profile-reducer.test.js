import React from "react";
import profileReducer from "./profile-reducer";
import { addPostActionCreator } from "./profile-reducer";
import { deletePost } from "./profile-reducer";
let state = {
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
};

it("new post should be incremented", () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer({ state }, { action });

    // 3.exception
    expect(newState.posts.length).toBe(5);
});

it("after deleting length of message should should be decrement", () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer({ state }, { action });

    // 3.exception
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});
it("after deleting length of message should should be decrement", () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer({ state }, { action });

    // 3.exception
    expect(newState.posts.length).toBe(3);
});
it("message of new post should be it-kamasutra.com", () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer({ state }, { action });

    // 3.exception
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});
it("message of new post shouldnt be decrement if id is incorrect", () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer({ state }, { action });

    // 3.exception
    expect(newState.posts[4].message).toBe(4);
});
