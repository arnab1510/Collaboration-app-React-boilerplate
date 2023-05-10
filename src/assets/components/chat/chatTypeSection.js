import cx from "classnames";
import Picker from 'emoji-picker-react';
import React, { useState } from "react";
import { ImAttachment } from 'react-icons/im';
import { VscSmiley } from 'react-icons/vsc';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from "./../../scss/design.module.scss";

function Editor() {

  const [value, setValue] = useState('');
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const values = [
    { 
      id: "515fd775-cb54-41f3-b921-56163871e2cf", 
      value: "Mickey Dooley" 
    },
    {
      id: "3f0b7933-57b8-4d9d-b238-f8af62b2e945",
      value: "Desmond Waterstone"
    },
    { 
      id: "711f68ab-ca20-4011-ab0f-d98c8fac4c05", 
      value: "Jeralee Fryd"
    },
    { 
      id: "775e05fc-72bc-48a1-9508-5c61674734f1",
      value: "Eddie Hucquart"
    },
    { 
      id: "e8701885-105e-4a21-b200-98e559776655", 
      value: "Nathalia Whear"
    }
  ];

  Editor.formats = [
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link', 'color', 'code'
  ]

  Editor.modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike','code'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color']}]
    ],
    // mention: {
    //   allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    //   mentionDenotationChars: ["@", "#"],
    //   source: function(searchTerm, renderList, mentionChar) {
    //     if (searchTerm.length === 0) {
    //       renderList(values, searchTerm);
    //     } else {
    //       const matches = [];
    //       for (let i = 0; i < values.length; i++)
    //         if (
    //           ~values[i].value
    //           .toLowerCase()
    //           .indexOf(searchTerm.toLowerCase())
    //         )
    //           matches.push(values[i]);
    //       renderList(matches, searchTerm);
    //     }
    //   }
    // },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

  const suggested_chats = [
    {value: 1, msg: 'Hey, good morning!'},
    {value: 2, msg: "Good morning Dev!"},
    {value: 3, msg: "Quick call?"}
  ];

  return (
    <div className={cx(styles.chatTypeContainer, styles.chat_fixed)}>
      <div className={styles.suggested_chats}>
        {suggested_chats.map((item, index) => {
          return (
            <span key={index} className={styles.suggested_chip}>{item.msg}</span>
          )
        })}
      </div>
      <div className={cx(styles.chat_type_inner, 'chat_style')}>
        <ReactQuill theme="snow" value={value} onChange={setValue}
          placeholder="Type your message here"
          formats={Editor.formats}
          modules={Editor.modules}
        />
        <div className={styles.footer_toolbar}>
          <div className="emojiPicker">
            {showEmojiPicker?<Picker onEmojiClick={onEmojiClick} />:null}
          </div>
          <div className={styles.toolbar_item} onClick={() => setShowEmojiPicker(!showEmojiPicker)}><VscSmiley/></div>
          <div className={styles.toolbar_item} onClick={() => setShowEmojiPicker(!showEmojiPicker)}>@</div>
          <div className={styles.toolbar_item} onClick={() => setShowEmojiPicker(!showEmojiPicker)}><ImAttachment/></div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
