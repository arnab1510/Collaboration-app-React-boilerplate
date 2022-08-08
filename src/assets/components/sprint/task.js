import { Avatar } from "antd";
import cx from "classnames";
import React, { useState } from "react";
import { AiOutlineBug } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import styles from "../../../assets/scss/design.module.scss";
import CustomModal from "../../../assets/components/common/Modal";
import { priorityTag } from "../../../services/common";

function Task({task, index, snapshot, provided}) {

    const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);

    const taskDetailsModal = () => {
        return (
          <CustomModal top={'30'} width={'80vw'} visible={taskDetailsVisible} title="Create request" setVisible={setTaskDetailsVisible}>
            <div>

            </div>
        </CustomModal>
        )
    };

    return (
        <>
            {taskDetailsModal()}
            <div onClick={() => setTaskDetailsVisible(true)} className={styles.kanbanItem} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
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
