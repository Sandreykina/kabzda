import React from 'react';
import style from './Nav.module.css';
import { NavLink } from "react-router-dom";
import FriendItemNav from './FriendItemNav/FriendItemNav';

const Nav = (props) => {
    const MyBestFriends = props.navSection.bestFriends.map( f => <FriendItemNav key = {f.id} name = {f.name} />)
    
    return (
        <div className={style.nav}>
            <div className={style.item}>
                <p><NavLink to="/profile" activeClassName={style.active}> My profile </NavLink></p>
                <p><NavLink to="/news" activeClassName={style.active}> News </NavLink></p>
                <p><NavLink to="/myposts" activeClassName={style.active}> My posts </NavLink></p>
                <p><NavLink to="/music" activeClassName={style.active}> Music </NavLink></p>
                <p><NavLink to="/users" activeClassName={style.active}> Users </NavLink></p>
                <p><NavLink to="/dialogs" activeClassName={style.active}> Messenger </NavLink></p>
                <p><NavLink to="/settings" activeClassName={style.active}> Settings </NavLink></p>
            </div>
            <div className = {style.text}>
                    <h4>My friends</h4>
                </div>
            <div className = {style.friends}>
               {MyBestFriends}
            </div>
        </div>
    );
}

export default Nav;
