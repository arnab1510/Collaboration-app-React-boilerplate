import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Mention from '@tiptap/extension-mention';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import cx from 'classnames';
import React, { useEffect } from 'react';
import styles from '../../../assets/scss/design.module.scss';
import DocMenuBar from '../vault/docMenuBar';

function CustomTextArea(props) {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, TextStyle, Color, 
      // FloatingMenu.configure({element: document.querySelector('.menu')})
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: ``,
  });

  if (!editor) {
    return null
  };

  return (
    <div className={styles.customTextArea}>
      <div className={cx('textAreaInput')}>
        <DocMenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default CustomTextArea;
