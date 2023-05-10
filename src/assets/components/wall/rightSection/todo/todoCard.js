import { Collapse } from "antd";
import cx from "classnames";
import React from "react";
import { BsChevronUp, BsFillCircleFill } from 'react-icons/bs';
import styles from "./../../../../scss/design.module.scss";

function TodoCard() {

  const { Panel } = Collapse;

  const todoList = [
    {id: 12, name: 'task 1 to be done today', due: '24/07/2022', priority: 'High'},
    {id: 12, name: 'task 1 to be done today', due: '24/07/2022', priority: 'Medium'},
    {id: 12, name: 'task 1 to be done today', due: '24/07/2022', priority: 'High'},
    {id: 12, name: 'task 1 to be done today', due: '24/07/2022', priority: 'Low'},
    {id: 12, name: 'task 1 to be done today', due: '24/07/2022', priority: 'Low'},
  ];

  const priorityColor = (data) => {
    if (data==="High") {
      return ("#f96161");
    }
    else if (data==="Medium") {
      return ("#ffa500");
    }
    else if (data==="Low") {
      return ("#4fd688");
    }
  }

  const todoItemRender = (item, index) => {
    return (
      <div key={index} className={styles.todoItem}>
        <div className={styles.todoItem_left}>
          <div className={styles.todoItem_data}>
            <span>{item.name}</span>
            <span className={styles.todoItem_data_priority} style={{color: priorityColor(item.priority)}}><BsFillCircleFill/>{item.priority}</span>
          </div>
        </div>
        <div className={styles.todoItem_done}>
          {item.due ? <span className={styles.todoItem_data_date}><div>Due by</div><div>{item.due}</div></span> : null}
        </div>
      </div>
    )
  }

  return (
    <div className={cx(styles.customCard, styles.mt_20, styles.todoContainer)}>
      <div className={styles.todoContainer_header}>
        <span>My Tasks</span>
        <span className={styles.todoContainer_header_right}>
          <BsChevronUp/>
        </span>
      </div>
        <div className={styles.todoList}>
          {todoList.map((item, index) => {
            return (
              todoItemRender(item, index)
            )
          })}
        </div>
    </div>
  );
}

export default TodoCard;
