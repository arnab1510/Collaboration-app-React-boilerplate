import cx from "classnames";
import React, { useEffect } from "react";
import styles from "../../assets/scss/design.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import ChatSidebar from "./chat/chatSidebar";
import VaultSidebar from "./vault/vaultSidebar";
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURRENT_URL, SET_HIDE_SECSIDEBAR, SET_SHOW_SECSIDEBAR } from "../../actions/types";

function SecondarySidebar() {

  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const utilities = useSelector((state) => state.utilities);

  const hideSidebarURLs = [
    '/vault/doc/:doc_id',
  ];

  useEffect(() => {
    if(hideSidebarURLs.indexOf(location.pathname) === -1) {
      dispatch({type: SET_SHOW_SECSIDEBAR});
      dispatch({type: SET_CURRENT_URL, data:location.pathname});
    }
    else {
      dispatch({type: SET_HIDE_SECSIDEBAR});
      dispatch({type: SET_CURRENT_URL, data:location.pathname});
    }
  }, [history]);

  const sideBar = (data) => {
    if (data.activeTab===1) {
      return (
        <ChatSidebar/>
      );
    }
    else if (data.activeTab===5) {
      return (
        <VaultSidebar/>
      );
    }
    else {
      return (
        null
      );
    }
  }

  return (
    <div>
      {utilities.showSecSidebar ? <div className={cx(styles.secondarySidebarContainer, 'scroll_overlay')}>
        {sideBar(utilities)}
      </div>:null}
    </div>
  );
}

export default SecondarySidebar;
