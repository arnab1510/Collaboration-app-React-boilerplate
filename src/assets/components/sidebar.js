import React from "react";
import { BsClockHistory, BsFolder2Open, BsListUl } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/scss/design.module.scss";
import logo_white from "../images/prodjam_logo_white.svg";

function Sidebar() {

  const history = useNavigate();

  const route = (url) => {
      history(url);
  };

  const PMsidebar = [
    {name: 'Chat', url: '/', icon: <IoChatbubbleEllipsesOutline/>},
    {name: 'Sprint', url: '', icon: <BsClockHistory/>},
    {name: 'Roadmap', url: '', icon: <VscNotebook/>},
    {name: 'Features', url: '', icon: <BsListUl/>},
    {name: 'Vault', url: '/vault', icon: <BsFolder2Open/>},
    {name: 'Build', url: '', icon: <RiPencilRuler2Line/>},
    {name: 'Channels', url: '', icon: <FiUsers/>},
  ];

  return (
    <div className={styles.mainSidebarFixed}>
      <div style={{textAlign: 'center'}}>
        <img src={logo_white}/>
      </div>
      <div className={styles.sidebarContainer}>
        {PMsidebar.map((items, index) => {
          return (
            <div className={styles.sidebarMenu} onClick={() => route(items.url)}>
              {items.icon}
              <div className={styles.sidebarMenuName}>{items.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;
