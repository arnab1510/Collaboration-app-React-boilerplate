import { Popover } from "antd";
import cx from "classnames";
import React from "react";
import { FiShare } from 'react-icons/fi';
import { GoThumbsup } from 'react-icons/go';
import clap from '../../../images/clap.svg';
import love from '../../../images/heart.svg';
import laugh from '../../../images/laugh.svg';
import like from '../../../images/like.svg';
import sad from '../../../images/sad.svg';
import shocked from '../../../images/shocked.svg';
import TooltipCustom from "../../common/Tooltip";
import styles from "./../../../scss/design.module.scss";

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
      <TooltipCustom title={data.name}>
        <img key={index} className={styles.emojiRow_emoji} src={data.src} alt={data.name}/>
      </TooltipCustom>
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
      <div className={cx(styles.button, styles.button_no_back)}>
        <FiShare/><span>Share</span>
      </div>
    </div>
  );
}

export default PostFooter;
