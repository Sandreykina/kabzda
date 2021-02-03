import React from 'react';
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.item}>
                <p><NavLink to="/profile" activeClassName = {style.active}> My profile </NavLink></p>
                <p><NavLink to="/news" activeClassName = {style.active}> News </NavLink></p>
                <p><NavLink to="/music" activeClassName = {style.active}> Music </NavLink></p>
                <p><NavLink to="/myfriends" activeClassName = {style.active}> My friends </NavLink></p>
                <p><NavLink to="/dialogs" activeClassName = {style.active}> Messenger </NavLink></p>
                <p><NavLink to="/settings" activeClassName = {style.active}> Settings </NavLink></p>
            </div>
        </div>
    );
}

export default Nav;