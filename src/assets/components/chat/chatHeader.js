import cx from "classnames";
import React from "react";
import { BsCameraVideo} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";

function ChatHeader() {

  return (
    <div className={cx(styles.chatHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <img className={styles.chatAvatar} src='https://picsum.photos/400'/>
        <div className={styles.chatUserName}>Dev Team</div>
      </div>
      <div className={styles.section_right}>
        <span className={styles.communicateIcon}><BsCameraVideo/></span>
        <span className={styles.communicateIcon}><FiPhone/></span>
      </div>
    </div>
  );
}

export default ChatHeader;
