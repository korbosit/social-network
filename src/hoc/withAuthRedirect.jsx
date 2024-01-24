import React from "react"; // Убедитесь, что вы импортируете React
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            if (!this.props.isAuth) return <Navigate to="/login/" />;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );

    return ConnectedAuthRedirectComponent;
};
