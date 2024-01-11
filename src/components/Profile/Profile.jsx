import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tErgFZ2UXuDEfIQjOYHsw2QE0mJRE7xY57VvnquBnA&s" />
            </div>
            <div>ava + descr</div>
            <MyPosts />
        </div>
    );
};

export default Profile;
