import cx from "classnames";
import React from "react";
import { HiDocumentText, HiOutlineDocumentText, HiPhotograph, HiVideoCamera } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import styles from "./../../scss/design.module.scss";
import TooltiipPJ from "../common/Tooltip";
import { Button, Input } from "antd";
import CustomModal from "../common/Modal";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";

function NewPost() {

  const [showPostModal, setShowPostModal] = useState(false);

  const postModal = () => {
    return (
      <CustomModal top={'40'} width={'50vw'} setVisible={setShowPostModal} visible={showPostModal}>
        <div className={styles.post_modal}>
          <div className={styles.post_modal_title}><HiOutlineDocumentText/><span>Create post</span></div>
          <TextArea rows={3} placeholder="Write something today..."/>
          <div className={styles.post_modal_actions}>
            <div className={styles.action_left}>
              <div className={cx(styles.actionBtn, styles.photoBtn)}><HiPhotograph/>Add photo</div>
              <div className={cx(styles.actionBtn, styles.videoBtn)}><HiVideoCamera/>Add video</div>
              <div className={cx(styles.actionBtn, styles.docBtn)}><HiDocumentText/>Add document</div>
            </div>
            <div className={styles.action_right}>
              <Button type="primary">Post</Button>
            </div>
          </div>
        </div>
      </CustomModal>
    )
  }

  return (
    <div className={cx(styles.newPost)} onClick={() => setShowPostModal(true)}>
      {postModal()}
      <img className={styles.chatContainer_avatar} src={'https://picsum.photos/310'} alt="chat_avatar"/>
      <span>Write something today...</span>
    </div>
  );
}

export default NewPost;
