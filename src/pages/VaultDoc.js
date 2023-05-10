import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '../assets/scss/design.module.scss';
// import Picker from 'emoji-picker-react';
import { Input } from 'antd';
import cx from "classnames";
import { useState } from 'react';
import { FiShare } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';
import TooltipCustom from '../assets/components/common/Tooltip';
import DocEditor from '../assets/components/vault/docEditor';
import DocMenuBar from '../assets/components/vault/docMenuBar';

function VaultDoc() {

    // const [value, setValue] = useState('');
    const [editorData, setEditorData] = useState(null);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    
    
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: '<p>Hello World!</p>',
    });

    
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

    const editorComp = (editor) => {
        setEditorData(editor);
    };
    
    return (
        <div>
            <div className={cx(styles.doc_container)}>
                <div className={styles.docHeader}>
                    <div className={cx(styles.flexRightHeader)}>
                        <Input placeholder="New document" bordered={false} />
                        <div className={styles.section_right}>
                        <TooltipCustom title="Share document">
                            <span className={styles.headerActionIcon}><FiShare/></span>
                        </TooltipCustom>
                        <TooltipCustom title="Search Vault">
                            <span className={styles.headerActionIcon}><HiOutlineSearch/></span>
                        </TooltipCustom>
                        </div>
                    </div>
                    <DocMenuBar editor={editorData} />
                </div>
                <DocEditor comp={editorComp}/>
            </div>
        </div>
    )
}

export default VaultDoc;