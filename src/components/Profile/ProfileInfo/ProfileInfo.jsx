import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tErgFZ2UXuDEfIQjOYHsw2QE0mJRE7xY57VvnquBnA&s" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + descr
            </div>
        </div>
    );
};

export default ProfileInfo;
