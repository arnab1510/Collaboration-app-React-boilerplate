import cx from "classnames";
import { FiChevronsLeft, FiTrash2 } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdIosShare } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RiHome2Line } from 'react-icons/ri';
import ChatSidebar from '../chat/chatSidebar';
import styles from "./../../scss/design.module.scss";
import { useEffect, useState } from "react";
import { SET_MIN_SEC_SIDEBAR } from "../../../actions/types";
import { BsFilter, BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";

function RoadmapBoard() {

	const GanttData = [
		{
			TaskID: 1,
			TaskName: 'Project Initiation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
			subtasks: [
				{ TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
				{ TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
				{ TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
			]
		},
		{
			TaskID: 5,
			TaskName: 'Project Estimation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
			subtasks: [
				{ TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
				{ TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
				{ TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
			]
		},
	];

	const [taskFields] = useState({
		id: 'TaskID',
		name: 'TaskName',
		startDate: 'StartDate',
		duration: 'Duration',
		progress: 'Progress',
		child: 'subtasks',
	});

    return (
		<div className="">
			<div className={styles.kanbanActionHeader}>
				<div className={cx(styles.section_title)}>Epic 3 Roadmap</div>
				<div className={styles.displayFlex}>
					<span className={styles.menuItem}><BsFilter/>More filters</span>
					<span className={styles.menuItem}><BsZoomIn/></span>
					<span className={styles.menuItem}><BsZoomOut/></span>
				</div>
			</div>
			<div className={styles.roadmapContainer}>
				<GanttComponent dataSource={GanttData} height="450px" taskFields={taskFields}/>
			</div>
		</div>
    );
}

export default RoadmapBoard;
