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
    savePhoto,
} from "../../redux/profile-reducer";

function ProfileContainer({
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    profile,
    status,
    authorizedUserId,
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                navigate("/login");
            }
        }
        getUserProfile(userId);
        getStatus(userId);
    }, [params.userId, getUserProfile, getStatus, authorizedUserId, navigate]);

    return (
        <Profile
            isOwner={!params.userId}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            savePhoto={savePhoto}
        />
    );
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
    }),
    withAuthRedirect
)(ProfileContainer);

//========================================================================================================================================================

// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import Profile from "./Profile";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { compose } from "redux";
// import {
//     getUserProfile,
//     getStatus,
//     updateStatus,
//     savePhoto,
// } from "../../redux/profile-reducer";

// class ProfileContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     refreshProfile() {
//         let userId = this.props.match?.params?.userId;
//         if (!userId) {
//             this.props.history.push("/login");
//         }
//         this.props.getUserProfile(userId);
//         this.props.getStatus(userId);
//     }

//     componentDidMount() {
//         this.refreshProfile();
//     }

//     componentDidCatchUp(prevProps, prevState, snapshot) {
//         if (this.props.match.params.userId != prevProps.match.params.userId) {
//             this.refreshProfile();
//         }
//     }

//     render() {
//         return (
//             <Profile
//                 {...this.props}
//                 isOwner={!this.props.match.params.userId}
//                 profile={this.props.profile}
//                 status={this.props.status}
//                 updateStatus={this.props.updateStatus}
//                 savePhoto={this.props.savePhoto}
//             />
//         );
//     }
// }

// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         status: state.profilePage.status,
//         authorizedUserId: state.auth.userId,
//         isAuth: state.auth.isAuth,
//     };
// };

// export default compose(
//     connect(mapStateToProps, {
//         getUserProfile,
//         getStatus,
//         updateStatus,
//         savePhoto,
//     }),
//     withRouter
// )(ProfileContainer);
