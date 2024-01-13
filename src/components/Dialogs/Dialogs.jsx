import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Vovanec</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Svetlana</NavLink>
                </div>
                <div className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to="/dialogs/3">Timka</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Beta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Alfa</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Mikki</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/7">Madlena</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/8">Alica</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo-yo</div>
            </div>
        </div>
    );
};

export default Dialogs;
