import cx from "classnames";
import React from "react";
import styles from "../../assets/scss/design.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import ChatSidebar from "./chat/chatSidebar";
import VaultSidebar from "./vault/vaultSidebar";
import { useSelector } from 'react-redux'

function SecondarySidebar() {

  const history = useNavigate();
  const utilities = useSelector((state) => state.utilities);

  const sideBar = (data) => {
    if (data.activeTab===1) {
      return (
        <ChatSidebar/>
      )
    }
    else if (data.activeTab===5) {
      return (
        <VaultSidebar/>
      )
    }
    else {
      return (
        null
      )
    }
  }

  return (
    <div className={cx(styles.secondarySidebarContainer, 'scroll_overlay')}>
      {sideBar(utilities)}
    </div>
  );
}

export default SecondarySidebar;
