import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={style.dialogsItems}>
            <div className = 'item'>
                <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt="ava" />
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>


        </div>
    )
}


export default DialogItem;