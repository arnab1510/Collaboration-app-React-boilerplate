import { Button } from 'antd';
import cx from 'classnames';
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { BiCheckDouble } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import Column from '../assets/components/sprint/column';
import initialData from '../assets/components/sprint/initialData';
import KanbanHeader from '../assets/components/sprint/kanbanHeader';
import styles from '../assets/scss/design.module.scss';

function Sprint() {

    const [data, setData] = useState(initialData.columns);
    const [frameworks, setFrameworks] = useState([
        {id: 0, name: 'Current Sprint', desc: 'Lorem ipsum por amit', selected: true},
        {id: 1, name: 'My tasks', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Bugs only', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Critical priority', desc: 'Lorem ipsum por amit', selected: false}]
    );

    const onDragEnd = async ({ source, destination }) => {
        if (!destination) return
        const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
        const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)
        const sourceCol = data[sourceColIndex]
        const destinationCol = data[destinationColIndex]

        const sourceTasks = [...sourceCol.tasks]
        const destinationTasks = [...destinationCol.tasks]
    
        if (source.droppableId !== destination.droppableId) {
          const [removed] = sourceTasks.splice(source.index, 1)
          destinationTasks.splice(destination.index, 0, removed)
          data[sourceColIndex].tasks = sourceTasks
          data[destinationColIndex].tasks = destinationTasks
        } else {
          const [removed] = destinationTasks.splice(source.index, 1)
          destinationTasks.splice(destination.index, 0, removed)
          data[destinationColIndex].tasks = destinationTasks
        }          setData(data)

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
                        <Button type="outline"><BiCheckDouble/>Complete sprint</Button>
                    </div>
                </div>
                <div className={styles.boardContainer}>
                    <DragDropContext onDragEnd={result => onDragEnd(result)}>
                        <div className={styles.kanbanBoard}>
                            {data && data.map((section, index) => {
                                return (
                                    <Droppable key={section.id} droppableId={section.id}>
                                        {(provided) => (
                                            <Column section={section} index={index} provided={provided}/>
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