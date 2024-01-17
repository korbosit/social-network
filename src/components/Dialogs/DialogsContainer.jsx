import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";
import classes from "./Dialogs.module.css";
import {
    updateNewMessageBodyCreator,
    sendMessageCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};

export default DialogsContainer;
