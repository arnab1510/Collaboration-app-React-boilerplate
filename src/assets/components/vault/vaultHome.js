import cx from "classnames";
import React from "react";
import { BsCameraVideo} from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";

function VaultFavourites() {

  const favItems = [
    {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/370'},
    {id: 1, type: 'doc', name: 'PRD req', poster: 'https://picsum.photos/380'},
    {id: 1, type: 'folder', name: 'Design curriculum', poster: 'https://picsum.photos/390'},
    {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/400'},
    {id: 1, type: 'folder', name: 'PRD requirements', poster: 'https://picsum.photos/410'},
    {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/420'}
  ];

  const vaultCard = (data) => {
    return (
      <div className={styles.vaultCard}>

      </div>
    )
  };

  return (
    <div>
      <div className={cx(styles.sectionHeader)}>Favourites</div>
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
