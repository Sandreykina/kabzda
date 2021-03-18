import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';


const DialogItem = (props) => {
    let way = "/dialogs/" + props.id;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={way}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return <div className="message">
        {props.message}
    </div>
}

let DialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Kolya' },
        { id: 3, name: 'Pavel' },
        { id: 4, name: 'Anatoliy' }
]

let MessagesData = [
        { id: 1, message: 'Yo'},
        { id: 2, message: 'Yo, bro'},
        { id: 3, message: 'Yooooo'},
        { id: 4, message: 'Brataan'}
]

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />

            </div>

            <div className={style.messages}>
                <MessageItem message = {MessagesData[0].message} id={MessagesData[0].id} />
                <MessageItem message = {MessagesData[1].message} id={MessagesData[1].id} />
                <MessageItem message = {MessagesData[2].message} id={MessagesData[2].id} />
                <MessageItem message = {MessagesData[3].message} id={MessagesData[3].id} />
            </div> 
        </div>
    );
}

export default Dialogs;