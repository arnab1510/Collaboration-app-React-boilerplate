import cx from "classnames";
import React from "react";
import { BsChevronRight} from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import DocIcon from "../../images/doc_icon.svg";

function VaultFavourites() {

  const favItems = [
    {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/370'},
    {id: 1, type: 'doc', name: 'PRD req', poster: 'https://picsum.photos/380'},
    {id: 1, type: 'folder', name: 'Design curriculum', poster: 'https://picsum.photos/390'},
    {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/400'},
    {id: 1, type: 'folder', name: 'PRD requirements', poster: 'https://picsum.photos/410'},
  ];

  const returnIcon = (type) => {
    if (type === "doc") {
      return {
        DocIcon
      }
    }
    else {
      return {

      }
    }
  }

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

  return (
    <div>
      <div className={cx(styles.flex_row_layout, styles.mb_14)}>
        <div className={styles.section_title}>Favourites</div>
        <div className={styles.flex_row_layout}>View All<BsChevronRight className={styles.ml_8}/></div>
      </div>
      <div className={styles.fileRow}>
        {
          favItems.map((item, index) => {
            return (
              <div>{vaultCard(item)}</div>
          )})
        }
      </div>
    </div>
  );
}

export default VaultFavourites;
