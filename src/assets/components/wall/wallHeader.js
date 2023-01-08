import cx from "classnames";
import React from "react";
import { IoMdNotificationsOutline } from 'react-icons/io';
import styles from "./../../scss/design.module.scss";
import TooltipCustom from "../common/Tooltip";

function WallHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <div className={styles.chatUserName}>Wall</div>
      </div>
      <div className={styles.section_right}>
        <TooltipCustom title="Notifications">
          <span className={styles.notifIcon}><IoMdNotificationsOutline/></span>
        </TooltipCustom>
      </div>
    </div>
  );
}

export default WallHeader;
