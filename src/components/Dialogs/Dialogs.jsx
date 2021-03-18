import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';


const DialogItem = (props) => {
    let way = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
        <NavLink to= {way}>{props.name}</NavLink>
    </div>
    )
}

const MessageItem = (props) => {
    return <div className = "message">
        {props.message}
    </div>
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                <DialogItem name = "Dima" id = '1' />
                <DialogItem name = "Kolya" id = '2' />
                <DialogItem name = "Pavel" id = '3' />
                <DialogItem name = "Anatoliy" id = '4' />

            </div>

            <div className={style.messages}>
                <MessageItem message = 'Yo' />
                <MessageItem message = 'Bro' />
                <MessageItem message = 'Yooo' />
                <MessageItem message = 'Bratan' />
            </div>
        </div>
    );
}

export default Dialogs;