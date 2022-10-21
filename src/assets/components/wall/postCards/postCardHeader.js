import React from "react";
import { FaGlobeAfrica } from 'react-icons/fa';
import styles from "./../../../scss/design.module.scss";

function PostCardHeader() {

  return (
    <div className={styles.postCard_header}>
      <img className={styles.chatContainer_avatar} src={"https://picsum.photos/310"} alt="chat_avatar"/>
      <div>
        <div className={styles.postCard_userName}>Test User</div>
        <div className={styles.postCard_postTime}><FaGlobeAfrica/>23 days</div>
      </div>
    </div> 
  );
}

export default PostCardHeader;
