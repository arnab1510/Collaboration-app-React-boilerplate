import cx from "classnames";
import React from "react";
import styles from "./../../../scss/design.module.scss";
import AttachmentComponent from "./attachmentComponent";
import ImageComponent from "./imageCardComponent";
import PostCardHeader from "./postCardHeader";
import PostFooter from "./postFooter";
import TextComponent from "./textCardComponent";

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
