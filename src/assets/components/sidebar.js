import { BsClockHistory, BsFileRichtext, BsFolder2Open, BsListUl } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { RiPencilRuler2Line } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_ACTIVE_TAB } from "../../actions/types";
import styles from "../../assets/scss/design.module.scss";
import logo_white from "../images/prodjam_logo_white.svg";

function Sidebar() {

  const history = useNavigate();
  const dispatch = useDispatch();

  const route = (url) => {
      history(url);
  };

  const PMsidebar = [
    {id: 1, name: 'Wall', url: '/wall', icon: <BsFileRichtext/>},
    {id: 2, name: 'Chat', url: '/chat/123', icon: <IoChatbubbleEllipsesOutline/>},
    {id: 3, name: 'Sprint', url: '/sprint', icon: <BsClockHistory/>},
    {id: 4, name: 'Roadmap', url: '/roadmap', icon: <VscNotebook/>},
    {id: 5, name: 'Features', url: '/features', icon: <BsListUl/>},
    {id: 6, name: 'Vault', url: '/vault', icon: <BsFolder2Open/>},
    {id: 7, name: 'Build', url: '/build', icon: <RiPencilRuler2Line/>},
    {id: 8, name: 'Channels', url: '', icon: <FiUsers/>},
  ];

  const updateTab = (item) => {
    dispatch({ type: SET_ACTIVE_TAB, data: item.id });
    route(item.url);
  };

  return (
    <div className={styles.mainSidebarFixed}>
      <div style={{textAlign: 'center'}}>
        <img alt="logo-white" src={logo_white}/>
      </div>
      <div className={styles.sidebarContainer}>
        {PMsidebar.map((item, index) => {
          return (
            <div key={index} className={styles.sidebarMenu} onClick={() => updateTab(item)}>
              {item.icon}
              <div className={styles.sidebarMenuName}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;
