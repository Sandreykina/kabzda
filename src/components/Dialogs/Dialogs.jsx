import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.state.messagesData.map(message => <MessageItem message={message.message} />)

    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    };


    return (
        <div className={style.dialogs}>
            <div className='item'>
                <div className={style.dialogsItems}>
                    <div>
                        {dialogsElements}
                    </div>
                </div>

            </div>

            <div className={style.messages}>

                {messagesElements}

                <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message" ></textarea>
                <button onClick={onSendMessageClick}></button>
            </div>




        </div>
    )
}

export default Dialogs;