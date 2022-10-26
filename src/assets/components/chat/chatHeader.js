import cx from "classnames";
import React from "react";
import { BsCameraVideo, BsBoxArrowUpRight} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import TooltipCustom from "../common/Tooltip";

function ChatHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <img className={styles.chatAvatar} src='https://picsum.photos/400' alt="profile"/>
        <div className={styles.chatUserName}>Dev Team</div>
      </div>
      <div className={styles.section_right}>
        <TooltipCustom title="Video call">
          <span className={styles.headerActionIcon}><BsCameraVideo/></span>
        </TooltipCustom>
        <TooltipCustom title="Audio call">
          <span className={styles.headerActionIcon}><FiPhone/></span>
        </TooltipCustom>
        <TooltipCustom title="Popup-out chat">
          <span className={styles.headerActionIcon}><BsBoxArrowUpRight/></span>
        </TooltipCustom>
      </div>
    </div>
  );
}

export default ChatHeader;
