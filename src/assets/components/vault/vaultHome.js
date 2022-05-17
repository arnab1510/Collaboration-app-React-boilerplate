import cx from "classnames";
import React from "react";
import { BsChevronRight} from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import DocIcon from "../../images/doc_icon.svg";
import { vaultCard } from "./vaultCards";

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
