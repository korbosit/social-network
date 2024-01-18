import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        // users приходит в компоненту Users в пропсы, со значением state.userPage.users
        users: state.usersPage.users,
    };
};

// передача дочерней компоненте callbacks
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
