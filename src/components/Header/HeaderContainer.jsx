import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAuthUserData();
        // authAPI.me().then((response) => {
        //     if (response.data.resultCode === 0) {
        //         let { id, login, email } = response.data.data;
        //         this.props.setAuthUserData(id, login, email);
        //     }
        // });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
    HeaderContainer
);
