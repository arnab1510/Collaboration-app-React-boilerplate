import cx from "classnames";
import React from "react";
import { BsChatDots, BsClockHistory, BsFolder2Open, BsListUl } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import {IoChatbubbleEllipsesOutline} from 'react-icons/io5';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import styles from "../../assets/scss/design.module.scss";
import logo_white from "../images/prodjam_logo_white.svg";

function Sidebar() {

  const PMsidebar = () => {
    return (
      <div className={styles.sidebarContainer}>
        <div className={cx(styles.sidebarMenu, styles.sidebarMenu_active)}>
          <IoChatbubbleEllipsesOutline/>
          <div className={styles.sidebarMenuName}>Chat</div>
        </div>
        <div className={styles.sidebarMenu}>
          <BsClockHistory/>
          <div className={styles.sidebarMenuName}>Sprint</div>
        </div>
        <div className={styles.sidebarMenu}>
          <VscNotebook/>
          <div className={styles.sidebarMenuName}>Roadmap</div>
        </div>
        <div className={styles.sidebarMenu}>
          <BsListUl/>
          <div className={styles.sidebarMenuName}>Features</div>
        </div>
        <div className={styles.sidebarMenu}>
          <BsFolder2Open/>
          <div className={styles.sidebarMenuName}>Vault</div>
        </div>
        <div className={styles.sidebarMenu}>
          <RiPencilRuler2Line/>
          <div className={styles.sidebarMenuName}>Build</div>
        </div>
        <div className={styles.sidebarMenu}>
          <FiUsers/>
          <div className={styles.sidebarMenuName}>Channels</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mainSidebarFixed}>
      <div style={{textAlign: 'center'}}>
        <img src={logo_white}/>
      </div>
      <div>
        {PMsidebar()}
      </div>
    </div>
  );
}

export default Sidebar;
