import { Avatar, Button, Comment, InputNumber, message, Select, Tabs, Tag, Timeline } from "antd";
import cx from "classnames";
import React, { useState } from "react";
import { AiOutlineBug, AiOutlineInfoCircle } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsFillBookmarkFill, BsTextLeft } from 'react-icons/bs';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdClose, MdContentCopy } from 'react-icons/md';
import Moment from "react-moment";
import ChatTypeSection from '../../chat/chatTypeSection';
import CustomModal from "../../common/Modal";
import styles from "../../../../assets/scss/design.module.scss";
import { priorityTag } from "../../../../services/common";
import TooltipCustom from "../../common/Tooltip";

function TaskCard({task, index, snapshot, provided}) {

    const { Option } = Select;
    const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);
    const [createType, setCreateType] = useState('Feature');
    const [taskDetails, setTaskDetails] = useState(null);
    const [editing, setEditing] = useState(null);
    const { TabPane } = Tabs;

    const onChange = (key) => {
        console.log(key);
    };

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
                style={{ width: '100%' }}
                defaultValue="lucy"
                onChange={handleChange}
                >
                <Option value="jack">To Do</Option>
                <Option value="lucy">In Progress</Option>
                <Option value="Yiminghe">In QA</Option>
                <Option value="Yiminghe">Released</Option>
            </Select>
        );
    };

    const priorityDropdown = () => {
        return (
            <Select
                style={{ width: '100%' }}
                onChange={handleChange}
                >
                <Option value="jack">
                    <div className={styles.assigneeOption}>
                        {priorityTag(0)}
                    </div>
                </Option>
                <Option value="lucy"><div className={styles.assigneeOption}>
                        {priorityTag(1)}
                    </div></Option>
                <Option value="Yiminghe"><div className={styles.assigneeOption}>
                        {priorityTag(2)}
                    </div></Option>
                <Option value="Yiminsghe"><div className={styles.assigneeOption}>
                        {priorityTag(3)}
                    </div></Option>
            </Select>
        );
    };

    const fixVersionDropdown = () => {
        return (
            <Select
                style={{ width: '100%' }}
                onChange={handleChange}
                >
                <Option value="jack">v1.4.02</Option>
                <Option value="july">v2.4.02</Option>
                <Option value="ace">v4.0.00</Option>
                <Option value="Yiminghe">Create new release</Option>
            </Select>
        );
    };

    const assigneeDropdown = () => {
        return (
            <Select
                style={{ width: '100%' }}
                defaultValue="lucy"
                size="large"
                onChange={handleChange}
                >
                <Option value="jack">
                    <div className={styles.assigneeOption}><img src='https://picsum.photos/400' alt="profile"/>Rishabh Pant</div>
                </Option>
                <Option value="lucy">
                    <div className={styles.assigneeOption}><img src='https://picsum.photos/200' alt="profile"/>Dev 1</div>
                </Option>
                <Option value="Yiminghe">
                    <div className={styles.assigneeOption}><img src='https://picsum.photos/300' alt="profile"/>Lorem ipsum john doe dev</div>
                </Option>
                <Option value="Yiminghe">
                    <div className={styles.assigneeOption}><img src='https://picsum.photos/600' alt="profile"/>Rishabh Pant</div>
                </Option>
            </Select>
        );
    };

    const tagDropdown = () => {

        const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
        const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
          
        const onPreventMouseDown = (event) => {
              event.preventDefault();
              event.stopPropagation();
        };
          
        return (
              <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                  marginRight: 3,
                }}
              >
                {label}
              </Tag>
            );
        };

        return (
            <Select
                mode="multiple"
                showArrow
                className={styles.dropdown}
                tagRender={tagRender}
                style={{ width: '100%' }}
                options={options}
            />
        );
    };

    const copyLink = () => {
        message.success(createType+' link has been copied to clipboard');
    };

    const commentSection = () => {
        return (
            <>
                <Comment
                    // actions={[<span key="comment-basic-reply-to">Reply to</span>]}
                    author={<a>Han Solo</a>}
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                    content={
                        <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                        </p>
                    }
                    datetime={
                        <TooltipCustom title={<Moment format="DD MMM YYYY, hh:mm A"></Moment>}>
                            <span><Moment fromNow></Moment></span>
                        </TooltipCustom>
                    }
                />
                <Comment
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                    content={
                        <>
                            <ChatTypeSection/>
                            <div className={styles.flexApart} style={{marginTop: '14px'}}>
                                <Button type="outline">Cancel</Button>
                                <Button type="primary">Submit comment</Button>
                            </div>
                        </>
                    }
                />
            </>
        );
    };

    const timelineItem = (data,name,date) => {
        return (
            <Timeline.Item>
                <div>
                    <div>{data}</div>
                    <div className={styles.timelineItem}>
                        <span>{name}</span><span>{date}</span>
                    </div>
                </div>
            </Timeline.Item>
        )
    }

    const taskDetailsModal = () => {
        return (
            <CustomModal top={'40'} hideClose={true} width={'85vw'} setVisible={setTaskDetailsVisible} visible={taskDetailsVisible}>
                <div className={styles.taskDetailsdPopupHeader}>
                    <span className={styles.task_section_left}>
                        <div className={styles.displayFlex}><BsFillBookmarkFill style={{color: '#00d200'}}/> <span className={styles.taskID}>FE-ID: 246</span></div>
                        <div className={styles.taskTitle}>{task.title}</div>
                    </span>
                    <div className={styles.section_right}>
                        <TooltipCustom title={"Copy "+createType+" link"}>
                            <span onClick={() => copyLink()} className={styles.headerActionIcon}><MdContentCopy/></span>
                        </TooltipCustom>
                        <TooltipCustom title={"Options"}>
                            <span className={styles.headerActionIcon}><HiOutlineDotsVertical/></span>
                        </TooltipCustom>
                        <span className={styles.headerActionIcon}><MdClose/></span>
                    </div>
                </div>
                <div className={styles.task_popup}>
                    <div className={styles.task_popup_section_left}>
                        <div>
                            <div className={styles.formLabel}><BsTextLeft/> Description</div>
                            <div className={styles.taskDesc} onClick={() => showEdit('desc')}>{task.description}</div>
                        </div>

                        <div className={cx(styles.commentContainer, 'commentContainer')}>
                            <Tabs defaultActiveKey="1" onChange={onChange}>
                                <TabPane tab="Comments" key="1">
                                    {commentSection()}
                                </TabPane>
                                <TabPane tab="History" key="2">
                                    <Timeline className={styles.mt_20}>
                                        {timelineItem('Removed title from ticket','Aanchal Roy','24-05-2022, 07:23 PM')}
                                        {timelineItem('Removed title from ticket','Aanchal Roy','24-05-2022, 07:23 PM')}
                                        {timelineItem('Removed title from ticket','Aanchal Roy','24-05-2022, 07:23 PM')}
                                        {timelineItem('Removed title from ticket','Aanchal Roy','24-05-2022, 07:23 PM')}
                                        {timelineItem('Removed title from ticket','Aanchal Roy','24-05-2022, 07:23 PM')}
                                    </Timeline>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className={styles.task_popup_section_right}>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Status</span><span>{statusDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Priority</span><span>{priorityDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Story points</span><span className={styles.displayFlex}><InputNumber style={{flexGrow: 1}} step="0.1" min={0}/><span className={styles.storyInfo}><AiOutlineInfoCircle/>1 story point = 2 hours</span></span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Assignee</span><span>{assigneeDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Tags</span><span>{tagDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Fix version</span><span>{fixVersionDropdown()}</span>
                        </div>
                        <div  className={styles.inlineForm}>
                            <span className={styles.formLabel}>Created on</span><span style={{color: "#a7a7a7"}}>24th August 2021, 4:41 AM</span>
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
            <div onClick={() => openTaskDrawer(task)} className={cx(styles.customCard, styles.kanbanItem)} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1', transform: snapshot.isDragging ? "transform: rotate(35deg)" : null}} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
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

export default TaskCard;
