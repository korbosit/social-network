import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id} />
    ));

    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} id={m.id} key={m.id} />
    ));
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };
    // Redirect
    // if (props.isAuth === false) return <Navigate to={"/login"} />;
    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
    AddMessageForm
);

export default Dialogs;
