import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';


const Dialogs = (props) => {


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/2">Kolya</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/3">Pavel</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/4">Anatoliy</NavLink>
                </div>
            </div>

            <div className={style.messages}>
                <div className="message">Yo</div>
                <div className="message">Yo</div>
                <div className="message">Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;