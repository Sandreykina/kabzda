import React from 'react';
import style from './../Nav.module.css';

const FriendItemNav = (props) => {

    return (
        <div className = {style.friend}>
            <div className={style.item}>
                <p>{props.name}</p>
            </div>

        </div>

    )
}

export default FriendItemNav;