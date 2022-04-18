import cx from "classnames";
import React from "react";
import styles from "../../assets/scss/design.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';

function SecondarySidebar() {

  const history = useNavigate();

  return (
    <div className={cx(styles.secondarySidebarContainer, 'scrollShow')}>
      
    </div>
  );
}

export default SecondarySidebar;
