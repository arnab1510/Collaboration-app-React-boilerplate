import cx from "classnames";
import React, { useCallback, useRef, useState } from "react";
import { BsTypeBold, BsTable, BsCodeSlash, BsTypeUnderline, BsCheckSquare, BsJustify } from 'react-icons/bs';
import { FiItalic } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineStrikethrough, AiOutlineLine, AiOutlineFontColors, AiOutlineHighlight, AiOutlineLink, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter } from 'react-icons/ai';
import { GrOrderedList, GrUndo, GrRedo } from 'react-icons/gr';
import { MdFormatListBulleted } from 'react-icons/md';
import { Select } from 'antd';
import styles from "./../../scss/design.module.scss";
import { SketchPicker } from 'react-color';
import useClickOutside from '../../../utils/useClickOutside';

const { Option } = Select;
const DocMenuBar = ({ editor }) => {

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [fontColor, setFontColor] = useState('#000000');
  const [showHighlightColorPicker, setShowHighlightColorPicker] = useState(false);
  const [highlightColor, setHighlightColor] = useState('#000000');
  const popover = useRef();
  const popoverHighlight = useRef();
  useClickOutside(popover, useCallback(() => setShowColorPicker(false), []));
  useClickOutside(popoverHighlight, useCallback(() => setShowHighlightColorPicker(false), []));

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

  const colorChange = (color, type) => {
    if (type === "font") {
      setFontColor(color);
      editor.chain().focus().setColor(color).run();
    }
    else if (type === "highlight") {
      setHighlightColor(color);
      editor.chain().focus().toggleHighlight({color: color}).run();
    }
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
      {returnIcon('taskList', <BsCheckSquare/>, () => editor.chain().focus().toggleTaskList().run())}
      {returnIcon('comment', <BiCommentDetail/>, () => editor.chain().focus().toggleTaskList().run())}
      <div onClick={setLink} className={cx(editor.isActive('link') ? 'is-active' : '', styles.iconFlex)}>
        <AiOutlineLink/>
      </div>
      <div>
        <span className={styles.iconFlex} onClick={() => setShowColorPicker(true)} style={{color: fontColor}}><AiOutlineFontColors/></span>
        {showColorPicker ? <div ref={popover}><SketchPicker
          color={fontColor}
          onChange={(color) => colorChange(color.hex, 'font')}
        /></div> : null}
      </div>
      <div>
        <span className={styles.iconFlex} onClick={() => setShowHighlightColorPicker(true)} style={{color: highlightColor}}><AiOutlineHighlight/></span>
        {showHighlightColorPicker ? <div ref={popoverHighlight}><SketchPicker
          color={highlightColor}
          onChange={(color) => colorChange(color.hex, 'highlight')}
        /></div> : null}
      </div>
      {returnIcon('left', <AiOutlineAlignLeft/>, () => editor.chain().focus().setTextAlign('left').run())}
      {returnIcon('center', <AiOutlineAlignCenter/>, () => editor.chain().focus().setTextAlign('center').run())}
      {returnIcon('right', <AiOutlineAlignRight/>, () => editor.chain().focus().setTextAlign('right').run())}
      {returnIcon('justify', <BsJustify/>, () => editor.chain().focus().setTextAlign('justify').run())}
      {returnIcon('table', <BsTable/>, () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run())}

      <Select defaultValue="normal" style={{ width: 140 }} onChange={() => headingChange}>
        <Option value="normal">
          <div onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive('paragraph') ? 'is-active' : ''}>
            Normal Text
          </div>
        </Option>
        <Option value="h1">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
            H1
          </div>
        </Option>
        <Option value="h2">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
            H2
          </div>
        </Option>
        <Option value="h3">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
            H3
          </div>
        </Option>
        <Option value="h4">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}     >
            H4
          </div>
        </Option>
        <Option value="h5">
          <div onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
            H5
          </div>
        </Option>
        <Option value="h6">
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
