import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

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
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    AddNewPostForm
);

export default MyPosts;

// props.addPost();
