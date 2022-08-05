import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../assets/scss/design.module.scss";
import {FiSearch,FiLogIn} from 'react-icons/fi';
import {MdOutlineMobileFriendly} from 'react-icons/md';
import {BsBriefcase} from 'react-icons/bs';
import Task from "./task";
import { Droppable } from 'react-beautiful-dnd';

function Column({column, tasks}) {

  return (
    <div>
      {column.title}
      <div>
        
      </div>
    </div>
  );
}

export default Column;
