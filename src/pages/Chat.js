import React from 'react';
import ChatHeader from '../assets/components/chat/chatHeader';
import ChatTypeSection from '../assets/components/chat/chatTypeSection';
import styles from '../assets/scss/design.module.scss';

function Chat() {

    const chatContent = [
        {sender: 0, contentType: "text", data: "Lorem Ipsum is simply dummy text of the printing", timestanmp: "24/06/2022"},
        {sender: 0, contentType: "text", data: "Lorem Ipsum is simply dummy text of the printing", timestanmp: "24/06/2022"},
    ];
            
    return (
        <div className={styles.chat_container}>
            <ChatHeader/>
            <div className={styles.chatContent}>
                {chatContent.map((chat => {
                    return (
                        <div className={styles.chatBubble}>
                            {chat.data}
                        </div>
                    )
                }))}
            </div>
            <ChatTypeSection/>
        </div>
    )
}

export default Chat;