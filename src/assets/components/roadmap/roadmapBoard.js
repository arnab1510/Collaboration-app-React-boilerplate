import cx from "classnames";
import { FiChevronsLeft, FiTrash2 } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdIosShare } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RiHome2Line } from 'react-icons/ri';
import ChatSidebar from '../chat/chatSidebar';
import styles from "./../../scss/design.module.scss";
import { GanttOriginal, Task, ViewMode } from "react-gantt-chart";
import { useEffect, useState } from "react";
import { SET_MIN_SEC_SIDEBAR } from "../../../actions/types";

function RoadmapBoard() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch({type: SET_MIN_SEC_SIDEBAR});
  // }, []);

  const [tasks] = useState([
		{
			type: "project",
			id: "ProjectSample",
			name: "1.Project",
			start: new Date(2021, 6, 1),
			end: new Date(2021, 9, 30),
			progress: 25,
			hideChildren: false,
		},
		{
			type: "task",
			id: "Task 0",
			name: "1.1 Task",
			start: new Date(2021, 6, 1),
			end: new Date(2021, 6, 30),
			progress: 45,
			project: "ProjectSample",
		},
		{
			type: "task",
			id: "Task 1",
			name: "1.2 Task",
			start: new Date(2021, 7, 1),
			end: new Date(2021, 7, 30),
			progress: 25,
			dependencies: ["Task 0"],
			project: "ProjectSample",
		},
		{
			type: "task",
			id: "Task 2",
			name: "1.3 Task",
			start: new Date(2021, 6, 1),
			end: new Date(2021, 7, 30),
			progress: 10,
			dependencies: ["Task 1"],
			project: "ProjectSample",
		},
		{
			type: "milestone",
			id: "Task 6",
			name: "1.3.1 MileStone (KT)",
			start: new Date(2021, 6, 1),
			end: new Date(2021, 6, 30),
			progress: 100,
			dependencies: ["Task 2"],
			project: "ProjectSample",
		},
	]);

    return (
      <div>
        <GanttOriginal
          tasks={tasks}
          viewMode={ViewMode.Month}
          columnWidth={200}
          ganttHeight={200}
        />
      </div>
    );
}

export default RoadmapBoard;
