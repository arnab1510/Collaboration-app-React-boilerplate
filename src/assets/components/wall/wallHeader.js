import cx from "classnames";
import React from "react";
import { BsCameraVideo, BsBoxArrowUpRight} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import TooltipCustom from "../common/Tooltip";

function WallHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        <div className={styles.chatUserName}>Wall</div>
      </div>
      <div className={styles.section_right}>
        <TooltipCustom title="Video call">
          <span className={styles.headerActionIcon}><BsCameraVideo/></span>
        </TooltipCustom>
      </div>
    </div>
  );
}

export default WallHeader;
