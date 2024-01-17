import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
            id={p.id}
        />
    ));

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;

// props.addPost();
