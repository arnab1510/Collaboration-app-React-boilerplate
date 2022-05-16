import cx from "classnames";
import React from "react";
import { BsChevronRight} from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import DocIcon from "../../images/doc_icon.svg";

function VaultCards() {

  const vaultCard = (data) => {
    return (
      <div className={styles.vaultCard}>
        <div className={styles.padding_12}>
          <div className={styles.menuDots}><FiMoreVertical className={styles.cardMenu}/></div>
          <img className={styles.vaultCardPreview} src="https://prodjam-assets.s3.ap-south-1.amazonaws.com/doc_preview.png"/>
        </div>
        <div className={cx(styles.bottom_section)}>
          <img className={styles.file_icon} src={DocIcon}/>
          <span>{data.name}</span>
        </div>
      </div>
    )
  };
}

export default VaultCards;
