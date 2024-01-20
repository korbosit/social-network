import React from "react";
import Profile from "./Profile";
import instance from "../../redux/api-instance";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        instance.get(`/profile/2`).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

// Функция возвращает объект
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
