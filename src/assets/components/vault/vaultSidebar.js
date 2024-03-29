import cx from "classnames";
import { FiChevronsLeft, FiShare, FiTrash2 } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { RiHome2Line } from 'react-icons/ri';
import ChatSidebar from '../chat/chatSidebar';
import styles from "./../../scss/design.module.scss";

function VaultSidebar() {

    const vaultOptions = () => {
      return (
        <div className={cx(styles.optionList)}>
          <div className={styles.sec_sidebar_option}>
            <IoIosAddCircleOutline/>
            Create New
          </div>
          <div className={styles.sec_sidebar_option}>
            <RiHome2Line/>
            Home
          </div>
          {/* <div className={styles.sec_sidebar_option}>
            <AiOutlineStar/>
            Favourites
          </div> */}
          <div className={styles.sec_sidebar_option}>
            <FiShare/>
            Shared with me
          </div>
          <div className={styles.sec_sidebar_option}>
            <FiTrash2/>
            Trash
          </div>
        </div>
      )
    }

    return (
      <div>
          <div className={styles.sidebarHeader}>
          <span>
              Vault
          </span>
          <span className={styles.collapseIcon}>
              <FiChevronsLeft/>
          </span>
          </div>
          {vaultOptions()}
          <ChatSidebar/>
      </div>
    );
}

export default VaultSidebar;
