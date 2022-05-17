import cx from "classnames";
import React from "react";
import { BsChevronRight} from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import DocIcon from "../../images/doc_icon.svg";
import FolderIcon from "../../images/folder_icon.svg";
import FolderPreview from "../../images/folder_preview.png";

const cardPreview = (type) => {
  if (type==="doc") {
    return (
      <div className={cx(styles.padding_12, styles.text_center)}>
        <img className={styles.vaultCardPreview} src="https://prodjam-assets.s3.ap-south-1.amazonaws.com/doc_preview.png"/>
      </div>
    )
  }
  else if (type==="folder") {
    return (
      <div className={cx(styles.padding_12, styles.folderPreview)}>
        <img className={cx(styles.vaultCardPreview)} src={FolderPreview}/>
      </div>
    )
  }
}

const prodLogo = (type) => {
  if (type==="doc") {
    return (
      DocIcon
    )
  }
  else if (type==="folder") {
    return (
      FolderIcon
    )
  }
}

export const vaultCard = (data) => {
    return (
      <div className={styles.vaultCard}>
        <div className={styles.menuDots}>
          <span><FiMoreVertical className={styles.cardMenu}/></span>
        </div>
        {cardPreview(data.type)}
        <div className={cx(styles.bottom_section)}>
          <img className={styles.file_icon} src={prodLogo(data.type)}/>
          <span>{data.name}</span>
        </div>
      </div>
    )
  };
