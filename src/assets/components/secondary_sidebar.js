import cx from "classnames";
import React from "react";
import styles from "../../assets/scss/design.module.scss";
import {FiChevronsLeft} from 'react-icons/fi';
import logo_white from "../images/prodjam_logo_white.svg";

function SecondarySidebar() {

  const chatItems = [
    {image: 'https://picsum.photos/310', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'},
    {image: 'https://picsum.photos/320', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'},
    {image: 'https://picsum.photos/330', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'},
    {image: 'https://picsum.photos/340', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'},
    {image: 'https://picsum.photos/350', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'},
    {image: 'https://picsum.photos/360', name: 'Rishabh Ray', lastChat: 'sdf', status: 'active'}
  ];

  const pinnedChat = () => {
    return (
      <div>
        <div className={styles.sidebarSubhead}>Pinned</div>
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
    <div className={cx(styles.secondarySidebarContainer, 'scrollShow')}>
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

export default SecondarySidebar;
