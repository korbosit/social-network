import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
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
            <div className={classes.posts}>
                <Post
                    message={postData[0].message}
                    likesCount={postData[0].id}
                    id={postData[0].id}
                />
                <Post
                    message={postData[1].message}
                    likesCount={postData[1].id}
                    id={postData[1].id}
                />
                <Post
                    message={postData[2].message}
                    likesCount={postData[2].id}
                    id={postData[2].id}
                />
                <Post
                    message={postData[3].message}
                    likesCount={postData[3].id}
                    id={postData[3].id}
                />
                <Post
                    message={postData[4].message}
                    likesCount={postData[4].id}
                    id={postData[4].id}
                />
                <Post
                    message={postData[5].message}
                    likesCount={postData[5].id}
                    id={postData[5].id}
                />
                <Post
                    message={postData[6].message}
                    likesCount={postData[6].id}
                    id={postData[6].id}
                />
                <Post
                    message={postData[7].message}
                    likesCount={postData[7].id}
                    id={postData[7].id}
                />
            </div>
        </div>
    );
};

export default MyPosts;
