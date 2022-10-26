import cx from "classnames";
import React from "react";
import { HiDocumentText, HiOutlineDocumentText, HiPhotograph, HiVideoCamera } from 'react-icons/hi';
import { FaGlobeAfrica } from 'react-icons/fa';
import styles from "./../../../scss/design.module.scss";
import TooltipCustom from "../../common/Tooltip";
import { Button, Input } from "antd";
import CustomModal from "../../common/Modal";
import { useState } from "react";
import PostCardHeader from "./postCardHeader";
import TextComponent from "./textCardComponent";
import PostFooter from "./postFooter";
import ImageComponent from "./imageCardComponent";
import AttachmentComponent from "./attachmentComponent";

function PostCard(props) {

  const {post, index} = props;

  return (
    <div key={index} className={cx(styles.customCard, styles.postCard)}>
      <PostCardHeader/>
      {post.content ? <TextComponent data={post}/> : null}
      {post.images ? <ImageComponent data={post}/> : null}
      {post.attachment ? <AttachmentComponent data={post}/> : null}
      <PostFooter/>
    </div>   
  );
}

export default PostCard;
