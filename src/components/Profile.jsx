import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tErgFZ2UXuDEfIQjOYHsw2QE0mJRE7xY57VvnquBnA&s" />
            </div>
            <div>ava + descr</div>
            <div>
                My posts
                <div>New post</div>
                <div className={classes.posts}>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
