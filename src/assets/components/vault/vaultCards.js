import cx from "classnames";
import React from "react";
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import DocIcon from "../../images/doc_icon.svg";
import FolderIcon from "../../images/folder_icon.svg";
import FolderPreview from "../../images/folder_preview.png";
import styles from "./../../scss/design.module.scss";

export const VaultCard = (data) => {

  const history = useNavigate();

  const cardPreview = (type,url) => {
    if (type==="doc") {
      return (
        <div className={cx(styles.padding_12, styles.text_center)} onClick={() => redirectURL(type,url)}>
          <img alt="preview_doc" className={styles.vaultCardPreview} src="https://prodj-assets.s3.ap-south-1.amazonaws.com/images/doc_preview.png"/>
        </div>
      )
    }
    else if (type==="folder") {
      return (
        <div className={cx(styles.padding_12, styles.folderPreview)}>
          <img alt="folder_img" className={cx(styles.vaultCardPreview)} src={FolderPreview}/>
        </div>
      )
    }
  };
  
  const prodLogo = (type) => {
    if (type==="doc") {
      return DocIcon
    }
    else if (type==="folder") {
      return FolderIcon
    }
  };
  
  const redirectURL = (type,url) => {
    if (type==="doc") {
      window.open(url, '_blank');
    }
    else if (type==="folder") {
      history(url);
    }
  };

  return (
    <div className={styles.vaultCard}>
      <div className={styles.menuDots}>
        <span><FiMoreVertical className={styles.cardMenu}/></span>
      </div>
      {cardPreview(data.type,data.url)}
      <div className={cx(styles.bottom_section)} onClick={() => redirectURL(data.type,data.url)}>
        <img alt="file_icon" className={styles.file_icon} src={prodLogo(data.type)}/>
        <span>{data.name}</span>
      </div>
    </div>
  )
};
