import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx';
import c from './Dialogs.module.css';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />,);
    let messElements = state.messData.map(m => <Message message={m.message} key={m.id} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
 
    return (
        
        <div className={c.content}>
            <div className={c.dialogs}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>
                {messElements}
                </div>
                <div>
                    <textarea value={newMessageBody} 
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;