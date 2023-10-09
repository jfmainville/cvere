import React from "react";
import classes from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={classes.Sidebar}>
            <NavLink to={"/dashboard"} className={({isActive}) => (isActive ? classes.ActiveLink : classes.Link)}>Dashboard</NavLink>
            <NavLink to={"/"} className={({isActive}) => (isActive ? classes.ActiveLink : classes.Link)}>Reports</NavLink>
        </div>
    );
};

export default Sidebar;