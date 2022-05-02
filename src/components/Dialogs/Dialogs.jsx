import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
    const dialogsElements = props.messagesPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} key={dialog.id} />)
    const messagesElements = props.messagesPage.messagesData.map((message) => <MessageItem message={message.message} key={message.id}/>)
    const newMessageBody = props.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className = {style.dialogs}>
            <div className = 'item'>
                <div className = {style.dialogsItems}>
                    <div>
                        {dialogsElements}
                    </div>
                </div>
            </div>
            <div className = {style.messages}>
                {messagesElements}
                <textarea 
                onChange = {onNewMessageChange} 
                value = {newMessageBody} 
                placeholder = "Enter your message" ></textarea>
                <button onClick = {onSendMessageClick}></button>
            </div>
        </div>
    )
}

export default Dialogs;
