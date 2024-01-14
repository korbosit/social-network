import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));

    let messagesElements = props.messages.map((m) => (
        <Message message={m.message} id={m.id} />
    ));
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElement}</div>
            <div className={classes.messages}>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;
