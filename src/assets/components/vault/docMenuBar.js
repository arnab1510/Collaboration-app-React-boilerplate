import cx from "classnames";
import React, { useCallback } from "react";
import { BsTypeBold, BsCodeSlash, BsTypeUnderline } from 'react-icons/bs';
import { FiItalic } from 'react-icons/fi';
import { AiOutlineStrikethrough, AiOutlineLine } from 'react-icons/ai';
import { GrOrderedList, GrUndo, GrRedo } from 'react-icons/gr';
import { MdFormatListBulleted } from 'react-icons/md';
import { Select } from 'antd';
import styles from "./../../scss/design.module.scss";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const { Option } = Select;
const DocMenuBar = ({ editor }) => {

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor]);

  if (!editor) {
    return null
  }

  const headingChange = () => {

  };

  const returnIcon = (name, icon, func) => {
    return (
      <div onClick={func}
        className={cx(editor.isActive(name) ? 'is-active' : '', styles.iconFlex)}>
        {icon}
      </div>
    );
  };

  return (
    <div className={styles.menuToolbar}>
      {returnIcon('bold', <BsTypeBold/>, () => editor.chain().focus().toggleBold().run())}
      {returnIcon('italic', <FiItalic/>, () => editor.chain().focus().toggleItalic().run())}
      {returnIcon('underline', <BsTypeUnderline/>, () => editor.chain().focus().toggleUnderline().run())}
      {returnIcon('strike', <AiOutlineStrikethrough/>, () => editor.chain().focus().toggleStrike().run())}
      {returnIcon('code', <BsCodeSlash/>, () => editor.chain().focus().toggleCode().run())}
      {returnIcon('bulletList', <MdFormatListBulleted/>, () => editor.chain().focus().toggleBulletList().run())}
      {returnIcon('orderedList', <GrOrderedList/>, () => editor.chain().focus().toggleOrderedList().run())}
      {returnIcon('codeBlock', <BsCodeSlash/>, () => editor.chain().focus().toggleCodeBlock().run())}
      {returnIcon('horRule', <AiOutlineLine/>, () => editor.chain().focus().setHorizontalRule().run())}
      {returnIcon('undo', <GrUndo/>, () => editor.chain().focus().undo().run())}
      {returnIcon('redo', <GrRedo/>, () => editor.chain().focus().redo().run())}

      <button
        onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()}
        className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
      >
        orange
      </button>

      <button
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={editor.isActive('taskList') ? 'is-active' : ''}
      >
        toggleTaskList
      </button>

      <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
        setLink
      </button>


      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        justify
      </button>
      <button onClick={() => editor.chain().focus().unsetTextAlign().run()}>unsetTextAlign</button>

      

      <input
        type="color"
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
      />

      <Select placeholder="Heading Styles" style={{ width: 140 }} onChange={() => headingChange}>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
            H1
          </div>
        </Option>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
            H2
          </div>
        </Option>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
            H3
          </div>
        </Option>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}     >
            H4
          </div>
        </Option>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
            H5
          </div>
        </Option>
        <Option value="jack">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
            H6
          </div>
        </Option>
      </Select>

    </div>
  )
}

export default DocMenuBar;
