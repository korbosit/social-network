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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Vovanec" id="1" />
                <DialogItem name="Svetlana" id="2" />
                <DialogItem name="Timka" id="3" />
                <DialogItem name="Beta" id="4" />
                <DialogItem name="Alfa" id="5" />
                <DialogItem name="Mikki" id="6" />
                <DialogItem name="Madlena" id="7" />
                <DialogItem name="Alica" id="8" />
            </div>
            <div className={classes.messages}>
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="Yo-yo" />
            </div>
        </div>
    );
};

export default Dialogs;
