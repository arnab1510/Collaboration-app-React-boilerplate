import cx from "classnames";
import React from "react";
import { BsTypeBold, BsCodeSlash, BsTypeUnderline } from 'react-icons/bs';
import { FiItalic } from 'react-icons/fi';
import { AiOutlineStrikethrough } from 'react-icons/ai';
import { GrOrderedList } from 'react-icons/gr';
import { MdFormatListBulleted } from 'react-icons/md';
import { Select } from 'antd';

import styles from "./../../scss/design.module.scss";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const { Option } = Select;
const DocMenuBar = ({ editor }) => {

  if (!editor) {
    return null
  }

  const headingChange = () => {

  };

  return (
    <div className={styles.menuToolbar}>
      <div
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <BsTypeBold/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <FiItalic/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <AiOutlineStrikethrough/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <BsCodeSlash/>
      </div>
      {/* <div
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </div> */}
      <div
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <BsTypeUnderline/>
      </div>
      <Select placeholder="Heading Styles" style={{ width: 140 }} onChange={() => headingChange}>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
            H1
          </div>
        </Option>
        <Option value="jack">
          <div
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
            H2
          </div>
        </Option>
        <Option value="jack">
          <div
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
            H3
          </div>
        </Option>
        <Option value="jack">
          <div
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}     >
            H4
          </div>
        </Option>
        <Option value="jack">
          <div
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
            H5
          </div>
        </Option>
        <Option value="jack">
          <div
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
            H6
          </div>
        </Option>
      </Select>
      
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <MdFormatListBulleted/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <GrOrderedList/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </div>
      <div onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </div>
      <div onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </div>
      <div onClick={() => editor.chain().focus().undo().run()}>
        undo
      </div>
      <div onClick={() => editor.chain().focus().redo().run()}>
        redo
      </div>
    </div>
  )
}

export default DocMenuBar;
