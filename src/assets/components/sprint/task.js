import { Avatar, Drawer, Select } from "antd";
import cx from "classnames";
import React, { useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import styles from "../../../assets/scss/design.module.scss";
import CustomModal from "../../../assets/components/common/Modal";
import { priorityTag } from "../../../services/common";
import CustomDrawer from "../common/CustomDrawer";
import { BsFillBookmarkFill, BsTextLeft } from 'react-icons/bs'
import { MdClose, MdContentCopy } from 'react-icons/md'
import TooltiipPJ from "../common/Tooltip";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Task({task, index, snapshot, provided}) {

    const { Option } = Select;
    const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);
    const [createType, setCreateType] = useState('feature');
    const [taskDetails, setTaskDetails] = useState(null);
    const [editing, setEditing] = useState(null);

    const showEdit = (type) => {
        if (type==="desc") {
            setEditing('desc');
        }
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const statusDropdown = () => {
        return (
            <Select
            style={{
                width: '100%',
              }}
                defaultValue="lucy"
                onChange={handleChange}
                >
                <Option value="jack">To Do</Option>
                <Option value="lucy">In Progress</Option>
                <Option value="Yiminghe">Quality Assurance</Option>
                <Option value="Yiminghe">Deployed to production</Option>
            </Select>
        );
    };

    const taskDetailsModal = () => {
        return (
            <CustomModal hideClose={true} width={'85vw'} setVisible={setTaskDetailsVisible} visible={taskDetailsVisible}>
                <div className={styles.taskDetailsdPopupHeader}>
                    <span className={styles.task_section_left}>
                        <div><BsFillBookmarkFill style={{color: '#00d200'}}/> <span className={styles.taskID}>FE ID: 246</span></div>
                        <div className={styles.taskTitle}>{task.title}</div>
                    </span>
                    <div className={styles.section_right}>
                        <TooltiipPJ title={"Copy "+createType+" link"}>
                            <span className={styles.headerActionIcon}><MdContentCopy/></span>
                        </TooltiipPJ>
                        <TooltiipPJ title={"Options"}>
                            <span className={styles.headerActionIcon}><HiOutlineDotsVertical/></span>
                        </TooltiipPJ>
                        <span className={styles.headerActionIcon}><MdClose/></span>
                    </div>
                </div>
                <div className={styles.task_popup}>
                    <div className={styles.task_popup_section_left}>
                        <div>
                            <div className={styles.formLabel}><BsTextLeft/> Description</div>
                            <div className={styles.taskDesc} onClick={() => showEdit('desc')}>{task.description}</div>
                        </div>
                    </div>
                    <div className={styles.task_popup_section_right}>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Status</span><span className={styles.formLabell}>{statusDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Story points</span><span className={styles.formLabell}>Selected for development</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Assignee</span><span className={styles.formLabell}>Selected for development</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Tags</span><span className={styles.formLabell}>Selected for development</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Fix version</span><span className={styles.formLabell}>Selected for development</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Created on</span><span className={styles.formLabell}>Selected for development</span>
                        </div>
                    </div>
                </div>
            </CustomModal>
        );
    };

    const openTaskDrawer = (data) => {
        setTaskDetails(data);
        setTaskDetailsVisible(true);
    };

    return (
        <>
            {taskDetailsModal()}
            <div onClick={() => openTaskDrawer(task)} className={styles.kanbanItem} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                <div className={styles.taskTitle}>{task.title}</div>
                <div className={styles.taskDesc}>{task.description}</div>
                <div className={styles.taskTagRow}>
                    {task.type===2 ? <span className={cx(styles.taskTag, styles.taskTag_bug)}><AiOutlineBug/> Bug</span> : null}
                    {task.tags.map((tag, index) => {
                        return (
                            <span key={index} className={styles.taskTag}>{tag}</span>
                        )
                    })}
                </div>
                <div className={styles.taskFooter}>
                    <div className={styles.flex_row_layout}>
                        {priorityTag(task.priority)}
                        {task.comments.length>0 ? <div className={styles.menuItem}><BiComment/>{task.comments.length}</div> : null}
                    </div>
                    <Avatar.Group
                        maxCount={2}
                        size={28}
                        maxStyle={{
                            color: '#f56a00',
                            backgroundColor: '#fde3cf',
                        }}
                        >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </Avatar.Group>
                </div>
            </div>
        </>
    );
}

export default Task;
