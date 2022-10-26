import React from "react";
import { FaGlobeAfrica } from 'react-icons/fa';
import { HiOutlineDotsVertical } from "react-icons/hi";
import TooltipCustom from "../../common/Tooltip";
import styles from "./../../../scss/design.module.scss";

function PostCardHeader() {

  return (
    <div className={styles.postCard_header}>
      <div className={styles.postCard_header_left}>
        <img className={styles.chatContainer_avatar} src={"https://picsum.photos/310"} alt="chat_avatar"/>
        <div>
          <div className={styles.postCard_userName}>Test User</div>
          <div className={styles.postCard_postTime}><FaGlobeAfrica/>23 days</div>
        </div>
      </div>
      <TooltipCustom title={"Options"}>
          <span className={styles.headerActionIcon}><HiOutlineDotsVertical/></span>
      </TooltipCustom>
    </div> 
  );
}

export default PostCardHeader;
