import cx from "classnames";
import React from "react";
import styles from "../../assets/scss/design.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import ChatSidebar from "./chat/chatSidebar";
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
    else {
      return (
        null
      )
    }
  }

  return (
    <div className={cx(styles.secondarySidebarContainer, 'scrollShow')}>
      {sideBar(utilities)}
    </div>
  );
}

export default SecondarySidebar;
