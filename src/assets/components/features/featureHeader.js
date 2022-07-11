import cx from "classnames";
import React from "react";
import { BsCameraVideo, BsBoxArrowUpRight} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import TooltiipPJ from "../common/Tooltip";

function FeatureHeader() {

  return (
    <div className={cx(styles.flexRightHeader, styles.chat_fixed)}>
      <div className={styles.section_left}>
        {/* <img className={styles.chatAvatar} src='https://picsum.photos/400' alt="profile"/> */}
        <div className={styles.chatUserName}>Feature Requests</div>
      </div>
      <div className={styles.section_right}>
        <TooltiipPJ title="Video call">
          <span className={styles.headerActionIcon}><BsCameraVideo/></span>
        </TooltiipPJ>
      </div>
    </div>
  );
}

export default FeatureHeader;
