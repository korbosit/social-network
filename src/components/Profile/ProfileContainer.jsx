import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { usersAPI } from "../../api/api";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function ProfileContainer({ setUserProfile, getUserProfile, profile, isAuth }) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    // useEffect(() => {
    //     let userId = params.userId || 2;
    //     instance.get(`/profile/${userId}`).then((response) => {
    //         setUserProfile(response.data);
    //     });
    // }, [params.userId, setUserProfile]);

    let userId = params.userId || 2;

    getUserProfile(userId);

    return <Profile profile={profile} />;
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withAuthRedirect
)(ProfileContainer);
