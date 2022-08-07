import cx from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { SET_CURRENT_URL, SET_HIDE_SECSIDEBAR, SET_HIDE_SIDEBAR, SET_SHOW_DOCHEADER, SET_SHOW_SECSIDEBAR } from "../../actions/types";
import styles from "../../assets/scss/design.module.scss";
import ChatSidebar from "./chat/chatSidebar";
import VaultSidebar from "./vault/vaultSidebar";

function SecondarySidebar() {

  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const utilities = useSelector((state) => state.utilities);

  const hideSidebarURLs = [
    '/vault/doc/:doc_id',
    '/build'
  ];

  useEffect(() => {
    if(hideSidebarURLs.indexOf(location.pathname) === -1) {
      dispatch({type: SET_SHOW_SECSIDEBAR});
      dispatch({type: SET_CURRENT_URL, data:location.pathname});
    }
    else {
      dispatch({type: SET_HIDE_SECSIDEBAR});
      dispatch({type: SET_HIDE_SIDEBAR});
      dispatch({type: SET_SHOW_DOCHEADER});
      dispatch({type: SET_CURRENT_URL, data:location.pathname});
    }
  }, [history]);

  const sideBar = (data) => {
    if (data.activeTab===1 || data.activeTab===4 || data.activeTab===2) {
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
