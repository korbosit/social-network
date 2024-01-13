import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
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
    ];
    let postsElements = posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} id={p.id} />
    ));
    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
