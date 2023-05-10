import cx from "classnames";
import React, { useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi';
import { useNavigate, useParams } from "react-router-dom";
import styles from "./../../scss/design.module.scss";

function ChatSidebar(props) {
    
    // const { isCMEWebinar, courseSlug, chapterIdProps } = props;
    const chatItems = [
        {userID: 123, image: 'https://picsum.photos/310', name: 'Rishabh Ray', lastChat: 'Lorem ipsum', status: 'active', },
        {userID: 1515, image: 'https://picsum.photos/320', name: 'Rishabh Ray', lastChat: 'dummy sit dor', status: 'away'},
        {userID: 23, image: 'https://picsum.photos/330', name: 'Rishabh Ray', lastChat: 'Hey, how are you?', status: 'offline'},
        {userID: 474, image: 'https://picsum.photos/340', name: 'Rishabh Ray', lastChat: 'yes it is done', status: 'busy'},
        {userID: 93, image: 'https://picsum.photos/350', name: 'Rishabh Ray', lastChat: "sure, let's talk then", status: 'presenting'},
        {userID: 151, image: 'https://picsum.photos/360', name: 'Rishabh Ray', lastChat: 'i am OOO', status: 'focusing'}
    ];
    const history = useNavigate();
    let { user_id } = useParams();
    
    const [selectedUser, setSelectedChat] = useState(chatItems[0].userID);

    const openChat = (userID) => {
        console.log(user_id);
        setSelectedChat(userID);
        history("chat/"+userID);
    };

    const pinnedChat = () => {
        return (
            <div>
            <div className={styles.sidebarSubhead}>Pinned</div>
            {chatItems.map((item, index) => {
                return (
                <div key={index} className={cx(styles.chatContainer, selectedUser===item.userID ? styles.chatContainer_active : null)} onClick={() => openChat(item.userID)}>
                    <img className={styles.chatContainer_avatar} src={item.image} alt="chat_avatar"/>
                    <div className={styles.chatContainer_right}>
                    <div className={styles.chatContainer_right_top}>
                        <span className={styles.chatContainer_right_top_name}>{item.name}</span>
                        <span className={styles.chatContainer_right_top_chatTime}>05:39 pm</span>
                    </div>
                    <div className={styles.chatContainer_right_text}>
                        {item.lastChat}
                    </div>
                    </div>
                </div>
                )
            })}
            </div>
        )
    }

    const latestChat = () => {
        return (
            <div>
            <div className={styles.sidebarSubhead}>Recent</div>
            {chatItems.map((item, index) => {
                return (
                <div key={index} className={cx(styles.chatContainer)}>
                    <img className={styles.chatContainer_avatar} src={item.image} alt="chat_avatar"/>
                    <div className={styles.chatContainer_right}>
                    <div className={styles.chatContainer_right_top}>
                        <span className={styles.chatContainer_right_top_name}>{item.name}</span>
                        <span className={styles.chatContainer_right_top_chatTime}>05:39 pm</span>
                    </div>
                    <div className={styles.chatContainer_right_text}>
                        {item.lastChat}
                    </div>
                    </div>
                </div>
                )
            })}
            </div>
        )
    }

    return (
    <div>
        <div className={styles.sidebarHeader}>
        <span>
            Chat
        </span>
        <span className={styles.collapseIcon}>
            <FiChevronsLeft/>
        </span>
        </div>
        <div>
        {pinnedChat()}
        </div>
        
        <div>
        {latestChat()}
        </div>
    </div>
    );
}

export default ChatSidebar;
