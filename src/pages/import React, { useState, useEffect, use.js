import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import ChatHeader from '../assets/components/chat/chatHeader';
import ChatTypeSection from '../assets/components/chat/chatTypeSection';
import initialData from '../assets/components/sprint/initialData';
import Column from '../assets/components/sprint/column';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function Sprint() {

    const [data, setData] = useState(initialData);    

    const onDragEnd = (result) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index) return;
        
        const newData = reorder(
            data,
            result.source.index,
            result.destination.index
        );
        // setData(newData);
    };

    const reorder = (data, startIndex, endIndex) => {
        const result = data.columns[0].tasks;
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        // return result;
    };

    return (
        <div className={styles.chat_container}>
            <ChatHeader/>
            <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    {data && data.columns.map((item, index) =>
                        <Droppable droppableId={item.id}>
                            {(provided) => (
                            <div className={styles.taskList} ref={provided.innerRef} {...provided.droppableProps}>
                                {data && data.columns[0].tasks.map((item, index) =>
                                <Draggable draggableId={item.content} key={item.id} index={index}>
                                    {(provided) => (
                                    <div className={styles.sprintTask}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <p>{item.content}</p>
                                    </div>
                                    )}
                                </Draggable>)}
                                {provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                    )}
                </DragDropContext>
            </div>
        </div>
    )
}

export default Sprint;