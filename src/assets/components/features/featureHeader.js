import cx from "classnames";
import React from "react";
import { BsCameraVideo } from 'react-icons/bs';
import TooltipCustom from "../common/Tooltip";
import styles from "./../../scss/design.module.scss";

function FeatureHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        {/* <img className={styles.chatAvatar} src='https://picsum.photos/400' alt="profile"/> */}
        <div className={styles.chatUserName}>Feature Requests</div>
      </div>
      <div className={styles.section_right}>
        <TooltipCustom title="Video call">
          <span className={styles.headerActionIcon}><BsCameraVideo/></span>
        </TooltipCustom>
      </div>
    </div>
  );
}

export default FeatureHeader;
