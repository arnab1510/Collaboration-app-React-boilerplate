import cx from "classnames";
import React, { useRef, useState } from "react";
import styles from "./../../../scss/design.module.scss";

function TextComponent(props) {

  const { data } = props;
  const [clamped, setClamped] = useState(true);

  return (
    <div>
      <span className={cx(clamped && styles.clamp)}>
        {data.content}
      </span>
      {/* {clamped && (
        <span className={styles.seeMore} onClick={() => setClamped(false)}>Read {clamped ? "more" : "less"}</span>)} */}
    </div>
  );
}

export default TextComponent;
