import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getUserProfile,
    getStatus,
    updateStatus,
} from "../../redux/profile-reducer";

function ProfileContainer({
    setUserProfile,
    getUserProfile,
    getUserStatus,
    profile,
    isAuth,
    status,
    updateStatus,
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        let userId = params.userId || 2;
        getUserProfile(userId);
        getStatus(userId);
    }, [params.userId, getUserProfile, getStatus]);

    return (
        <Profile
            profile={profile}
            status={status}
            updateStatus={updateStatus}
        />
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withAuthRedirect
)(ProfileContainer);
