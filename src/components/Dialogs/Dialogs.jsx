import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    let dialogs = [
        {
            id: 1,
            name: "Vovanec",
        },
        {
            id: 2,
            name: "Svetlana",
        },
        {
            id: 3,
            name: "Timka",
        },
        {
            id: 4,
            name: "Beta",
        },
        {
            id: 5,
            name: "Alfa",
        },
        {
            id: 6,
            name: "Mikki",
        },
        {
            id: 7,
            name: "Madlena",
        },
        {
            id: 8,
            name: "Alica",
        },
    ];
    let messages = [
        {
            id: 1,
            message: "Hi",
        },
        {
            id: 2,
            message: "Hello",
        },
        {
            id: 3,
            message: "How are you?",
        },
        {
            id: 4,
            message: "Yo-yo-yo",
        },
        {
            id: 5,
            message: "I will back",
        },
        {
            id: 6,
            message: "Astalavista Baby",
        },
        {
            id: 7,
            name: "How old are you",
        },
        {
            id: 8,
            message: "What is your favorite book?",
        },
    ];

    let dialogsElement = dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));

    let messagesElements = messages.map((m) => (
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
