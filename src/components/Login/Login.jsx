import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsContol/FormsContol";
import { required } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import classes from "../common/FormsContol/FormsContol.module.css";
import { createField } from "../common/FormsContol/FormsContol";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {
                type: "password",
            })}
            {createField(
                null,
                "rememberMe",
                [],
                Input,
                { type: "checkbox" },
                "remember Me"
            )}
            {error && <div className={classes.formSummuryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Navigate to={"/profile"} />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
