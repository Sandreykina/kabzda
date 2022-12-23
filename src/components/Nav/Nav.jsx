import React from 'react';
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.item}>
                <p><NavLink to="/profile" > My profile </NavLink></p>
                <p><NavLink to="/"> My posts </NavLink></p>
                {/* <p><NavLink to="/users"> Users </NavLink></p> */}
            </div>
        </div>
    );
}

export default Nav;
