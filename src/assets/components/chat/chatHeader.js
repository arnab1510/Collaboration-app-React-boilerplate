import cx from "classnames";
import React from "react";
import { BsCameraVideo, BsBoxArrowUpRight} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import TooltiipPJ from "../common/Tooltip";

function ChatHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <img className={styles.chatAvatar} src='https://picsum.photos/400' alt="profile"/>
        <div className={styles.chatUserName}>Dev Team</div>
      </div>
      <div className={styles.section_right}>
        <TooltiipPJ title="Video call">
          <span className={styles.headerActionIcon}><BsCameraVideo/></span>
        </TooltiipPJ>
        <TooltiipPJ title="Audio call">
          <span className={styles.headerActionIcon}><FiPhone/></span>
        </TooltiipPJ>
        <TooltiipPJ title="Popup-out chat">
          <span className={styles.headerActionIcon}><BsBoxArrowUpRight/></span>
        </TooltiipPJ>
      </div>
    </div>
  );
}

export default ChatHeader;
