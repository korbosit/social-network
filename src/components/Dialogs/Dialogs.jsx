import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Vovanec</div>
                <div className={classes.dialog}>Svetlana</div>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Timka
                </div>
                <div className={classes.dialog}>Beta</div>
                <div className={classes.dialog}>Alfa</div>
                <div className={classes.dialog}>Mikki</div>
                <div className={classes.dialog}>Madlena</div>
                <div className={classes.dialog}>Alica</div>
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
