import cx from "classnames";
import React, { useEffect } from "react";
import { BsChevronRight} from 'react-icons/bs';
import styles from "./../../scss/design.module.scss";
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import DocMenuBar from "./docMenuBar";

function DocEditor(props) {

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
  });

  useEffect(() => {
    props.comp(editor);
  }, [editor]);

  return (
    <div className={styles.editorPage}>
      <EditorContent editor={editor} />
    </div>
  )
}

export default DocEditor;
