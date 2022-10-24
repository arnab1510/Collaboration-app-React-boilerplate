import cx from "classnames";
import React, { useRef, useState } from "react";
import styles from "./../../../scss/design.module.scss";
import {BsFileEarmarkPdfFill, BsFileZipFill} from 'react-icons/bs';
import { FiDownload } from "react-icons/fi";

function AttachmentComponent(props) {

  const { data } = props;

  const renderFile = () => {
    if (data.attachment.type==="pdf") {
      return (
        fileSectionRender(<BsFileEarmarkPdfFill/>)
      )
    }
    else {
      return (
        fileSectionRender(<BsFileZipFill/>)
      )
    }
  };

  const fileSectionRender = (icon) => {
    return (
      <div className={styles.attachment_container}>
        <div className={styles.attachment_left}>
          <div>{icon}</div>
          <div className={styles.fileData}>
            <span className={styles.fileName}>File name dummy.{data.attachment.type}</span>
            <span className={styles.fileSize}>2.5MB</span>
          </div>
        </div>
        <div className={styles.attachment_right}>
          <FiDownload/>
        </div>
      </div>
    )
  }

  return (
    <div>
      {renderFile()}
    </div>
  );
}

export default AttachmentComponent;
