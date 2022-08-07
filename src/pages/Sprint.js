import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import initialData from '../assets/components/sprint/initialData';
import Column from '../assets/components/sprint/column';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Avatar, Input } from 'antd';
import KanbanHeader from '../assets/components/sprint/kanbanHeader';
import { BsExclamation, BsFilter } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import { FiChevronDown, FiChevronsUp, FiChevronUp } from 'react-icons/fi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import TooltiipPJ from '../assets/components/common/Tooltip';
import { AiFillFire, AiOutlineExclamation } from 'react-icons/ai';

function Sprint() {

    const [data, setData] = useState(initialData.columns);
    const [frameworks, setFrameworks] = useState([    
        {id: 0, name: 'Current Sprint', desc: 'Lorem ipsum por amit', selected: true},
        {id: 1, name: 'My tasks', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Bugs only', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Critical priority', desc: 'Lorem ipsum por amit', selected: false}]
    );

    const onDragEnd = (result) => {
        if (!result.destination) return
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)
            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTasks = [...sourceCol.tasks]
            const destinationTasks = [...destinationCol.tasks]
            const [removed] = sourceTasks.splice(source.index, 1)
            destinationTasks.splice(destination.index, 0, removed)
            data[sourceColIndex].tasks = sourceTasks
            data[destinationColIndex].tasks = destinationTasks

            setData(data);
        }
    };

    const selectPriority = (index) => {
        let newArr = [...frameworks];
        newArr[index].selected = !newArr[index].selected;
        for (var i=0; i<=frameworks.length-1; i++) {
          if (i!==index) {
            newArr[i].selected = false;
          }
        }
        setFrameworks(newArr);
    };

    const priorityTag = (value) => {
        if (value===0) {
            return (
                <span className={styles.priorityTag} style={{color: 'red'}}><AiFillFire/> Critical</span>
            )
        }
        else if (value===1) {
            return (
                <span className={styles.priorityTag} style={{color: 'red'}}><AiOutlineExclamation style={{marginRight: '-1px'}}/> High</span>
            )
        }
        else if (value===2) {
            return (
                <TooltiipPJ title="Medium">
                    <span className={styles.priorityTag} style={{color: '#ef9b00'}}><HiOutlineMenuAlt4/></span>
                </TooltiipPJ>
            )
        }
        else if (value===3) {
            return (
                <TooltiipPJ title="Low">
                    <span className={styles.priorityTag} style={{color: 'green'}}><FiChevronDown/></span>
                </TooltiipPJ>
            )
        }
    };

    const sectionBorderColor = ['#70747E', '#849DE2', '#F3D1B8', '#AED39D'];

    return (
        <div className={styles.kanban_container}>
            <KanbanHeader/>
            <div className={styles.kanbanBody}>
                <div className={styles.kanbanActionHeader}>
                    <div className={styles.frameworkRow}>
                        <span>Quick filters</span>
                        <span className={styles.frameworkTagRow}>
                        {frameworks.length!==0 ? frameworks.map((item,index) => {
                            return (
                                <span onClick={() => selectPriority(index)} className={cx(styles.frameworkTag, item.selected?styles.selected:null)} key={index}>{item.name}</span>
                            )
                        }) : null}
                        </span>
                    </div>
                    <div>
                        <span className={styles.menuItem}><BsFilter/>More filters</span>
                    </div>                
                </div>
                <div className={styles.boardContainer}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <div className={styles.kanbanBoard}>
                            {data && data.map((section, index) => {
                                return (
                                    <Droppable key={section.id} droppableId={section.title}>
                                        {(provided) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef} className={styles.kanbanBoard_section}>
                                                <div className={styles.kanbanBoard_section_title} style={{borderBottom: "3px solid "+sectionBorderColor[index]}}>
                                                    <span className={styles.columnName}>{section.title}</span> <span className={styles.taskLength}>{section.tasks.length}</span>
                                                </div>
                                                <div className={styles.kanbanBoard_section_content}>
                                                    {section.tasks.map((task, index) => {
                                                        return (
                                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div className={styles.kanbanItem} style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? '0.5' : '1'}} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                                                        <div className={styles.taskTitle}>{task.title}</div>
                                                                        <div className={styles.taskDesc}>{task.description}</div>
                                                                        <div className={styles.taskTagRow}>
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
                                                                )
                                                            }}
                                                        </Draggable>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                )
                            })}
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </div>
    )
}

export default Sprint;