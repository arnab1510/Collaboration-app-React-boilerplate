import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import styles from "../../../assets/scss/design.module.scss";
import TaskCard from "./Task/taskCard";

function Column({section, provided, index}) {

  const sectionBorderColor = ['#9d81ff', '#F3D1B8', '#4aa8ff', '#AED39D'];

  return (
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
                              <TaskCard task={task} index={index} provided={provided} snapshot={snapshot}/>
                          )
                      }}
                  </Draggable>
              )
          })}
          {provided.placeholder}
      </div>
    </div>
  );
}

export default Column;
