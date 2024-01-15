import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} id={p.id} />
    ));

    let newPostElement = React.createRef();
    let addPost = () => {
        // props.addPost()
        props.dispatch({ type: "ADD-POST" });
    };

    let onPostChange = () => {
        let text = newPostElement.current.updateNewPostText;
        // props.updateNewPostText(text);
        let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
        props.dispatch(action);
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
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;

// props.addPost();
