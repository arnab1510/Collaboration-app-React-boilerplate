import cx from "classnames";
import React, { useRef, useState } from "react";
import styles from "./../../../scss/design.module.scss";
import clap from '../../../images/clap.svg';
import love from '../../../images/heart.svg';
import like from '../../../images/like.svg';
import sad from '../../../images/sad.svg';
import laugh from '../../../images/laugh.svg';
import shocked from '../../../images/shocked.svg';
import TooltiipPJ from "../../common/Tooltip";
import {FiShare} from 'react-icons/fi';
import {GoThumbsup} from 'react-icons/go';
import { Popover } from "antd";

function PostFooter() {

  const emojis = [
    {id: 1, src: love, name: "Love"},
    {id: 2, src: like, name: "Like"},
    {id: 3, src: clap, name: "Applaud"},
    {id: 4, src: laugh, name: "Laugh"},
    {id: 5, src: sad, name: "Sad"},
    {id: 6, src: shocked, name: "Shocking"},
  ];

  const emojiRender = (data, index) => {
    return (
      <TooltiipPJ title={data.name}>
        <img key={index} className={styles.emojiRow_emoji} src={data.src} alt={data.name}/>
      </TooltiipPJ>
    )
  };

  const emojiList = () => {
    return (
      <div className={styles.emojiRow}>
        {emojis.map((item, index) => {
          return (emojiRender(item, index))
        })}
      </div>
    )
  };

  return (
    <div className={styles.postCard_cardFooter}>
      <Popover content={emojiList}>
        <div className={styles.postCard_cardFooter_reactBtn}><GoThumbsup/><span>React</span></div>
      </Popover>
      <div className={styles.postCard_cardFooter_shareBtn}>
        <FiShare/><span>Share</span>
      </div>
    </div>
  );
}

export default PostFooter;
