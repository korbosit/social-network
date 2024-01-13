import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
    let dialogsData = [
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
    let messagesData = [
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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
                <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} />
            </div>
            <div className={classes.messages}>
                <Message
                    message={messagesData[0].message}
                    id={messagesData[0].id}
                />
                <Message
                    message={messagesData[1].message}
                    id={messagesData[1].id}
                />
                <Message
                    message={messagesData[2].message}
                    id={messagesData[2].id}
                />
                <Message
                    message={messagesData[3].message}
                    id={messagesData[3].id}
                />
                <Message
                    message={messagesData[4].message}
                    id={messagesData[4].id}
                />
                <Message
                    message={messagesData[5].message}
                    id={messagesData[5].id}
                />
                <Message
                    message={messagesData[6].message}
                    id={messagesData[6].id}
                />
                <Message
                    message={messagesData[7].message}
                    id={messagesData[7].id}
                />
            </div>
        </div>
    );
};

export default Dialogs;
