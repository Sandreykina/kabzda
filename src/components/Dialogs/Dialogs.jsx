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
    { id: 1, message: 'Yo' },
    { id: 2, message: 'Yo, bro' },
    { id: 3, message: 'Yooooo' },
    { id: 4, message: 'Brataan' }
]

let DialogsElement = DialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
let MessagesElement = MessagesData.map(m => <MessageItem message={m.message} id={m.id} />)

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs}>
                {DialogsElement}
            </div>

            <div className={style.messages}>
                {MessagesElement}
            </div>
        </div>
    );
}

export default Dialogs;