import cx from "classnames";
import React, { useEffect } from "react";
import { BsChevronRight } from 'react-icons/bs';
import styles from "./../../scss/design.module.scss";
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import FloatingMenu from '@tiptap/extension-floating-menu'
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color';
import Mention from '@tiptap/extension-mention';
import Collaboration from '@tiptap/extension-collaboration';
import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import Link from '@tiptap/extension-link';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';

function DocEditor(props) {

  // const ydoc = new Y.Doc();
  // const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false}),
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
        // suggestion,
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
      // Collaboration.configure({
      //   document: provider.doc,
      // })
    ],
    content: ``,
  });

  useEffect(() => {
    props.comp(editor);
  }, [editor]);

  return (
    <div className={cx(styles.editorPage, 'editorPage')}>
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
      </BubbleMenu>}

      {/* {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          h1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          h2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          bullet list
        </button>
      </FloatingMenu>} */}

      <EditorContent editor={editor} />
    </div>
  )
}

export default DocEditor;
