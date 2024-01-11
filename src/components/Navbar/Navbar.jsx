import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : classes.item
                    }
                    to="/profile"
                >
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : classes.item
                    }
                    to="/dialogs"
                >
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : classes.item
                    }
                    to="/news"
                >
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : classes.item
                    }
                    to="/music"
                >
                    Music
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
