import cx from "classnames";
import React from "react";
import { BsChevronRight} from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import DocIcon from "../../images/doc_icon.svg";
import { VaultCard } from "./vaultCards";

function VaultRow({items,title}) {

  return (
    <div>
      <div className={cx(styles.flex_row_layout, styles.mb_14)}>
        <div className={styles.section_title}>{title}</div>
        <div className={cx(styles.flex_row_layout, styles.view_all)}>View All<BsChevronRight className={styles.ml_8}/></div>
      </div>
      <div className={styles.fileRow}>
        {
          items.map((item, index) => {
            return (
              <div>{VaultCard(item)}</div>
          )})
        }
      </div>
    </div>
  );
}

export default VaultRow;
