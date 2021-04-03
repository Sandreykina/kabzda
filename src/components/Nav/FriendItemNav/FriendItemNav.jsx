import React from 'react';
import style from './../Nav.module.css';

const FriendItemNav = (props) => {

    return (
        <div className = {style.friend}>
            <div className={style.item}>
                <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt="ava" />
                <p>{props.name}</p>
            </div>

        </div>

    )
}


export default FriendItemNav;