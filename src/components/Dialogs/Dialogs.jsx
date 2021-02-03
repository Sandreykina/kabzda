import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'George' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Abdulla' },
        { id: 5, name: 'Kolya-Kolya' },
        { id: 6, name: 'Bro' },
    ]
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo-Kolya' },
        { id: 6, message: 'Yo' },
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData.map(message => <MessageItem message={message.message} />)


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            {messagesElements}
            <div className={style.messages}>

            </div>
        </div>
    )
}

export default Dialogs;