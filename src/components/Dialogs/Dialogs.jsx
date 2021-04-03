import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messagesData.map(message => <MessageItem message={message.message} />)


    return (
        <div className={style.dialogs}>
            <div className='item'>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>

            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;