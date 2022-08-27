import { ColumnDirective, ColumnsDirective, DayMarkers, Edit, GanttComponent, Inject, Selection } from "@syncfusion/ej2-react-gantt";
import { Input, Dropdown, Button, Space, Menu, Progress } from 'antd';
import { useRef, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";
import styles from "./../../scss/design.module.scss";

function RoadmapBoard() {

	const ganttInstance = useRef();

	const GanttData = [
		{
			TaskID: 1,
			TaskName: 'Project Initiation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
			subtasks: [
				{ TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, as: "dfs" },
				{ TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10, as: "dfs" },
				{ TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 5 },
			]
		},
		{
			TaskID: 5,
			TaskName: 'Project Estimation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
			subtasks: [
				{ TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
				{ TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 },
				{ TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 100 }
			]
		},
	];

	const [taskFields] = useState({
		id: 'TaskID',
		name: 'TaskName',
		progress: 'Progress',
		as: 'as',
		duration: 'Duration',
		startDate: 'StartDate',
		child: 'subtasks',
	});

	const editSettings = {
		editMode: 'Auto',
		allowTaskbarEditing: true
	};

	const collapsing = (args) => {
        if (ganttInstance.current.ganttChartModule.isExpandCollapseFromChart) {
            args.cancel = true;
        }
    };

	const dropdownMenu = (
		<Menu>
		  <Menu.Item>
			<div className={styles.menuItem}><SiMicrosoftexcel />CSV</div>
		  </Menu.Item>
		  <Menu.Item>
			<div className={styles.menuItem}><ImFilePdf />PDF</div>
		  </Menu.Item>
		</Menu>
	);

	const customizeCell = (args) => {
        if (args.data.hasChildRecords) {
            args.cell.style.fontWeight = "bold";
			args.cell.style.backgroundColor = "#f4f3f3";
        }
    };

	const splitterSettings = {
		position: "40%"
	};

	const customProg = (progress) => {
		return (
			<div className={styles.Taskprogress}>
				<span>{progress}%</span>
				<Progress width={20} strokeWidth={13} type="circle" percent={progress} format={() => null} />
			</div>
		)
	};
	
    return (
		<div className="">
			<div className={styles.kanbanActionHeader}>
				<Input placeholder="Search roadmap" style={{ width: '340px' }}/>
				<div className={styles.displayFlex}>
					<Dropdown overlay={dropdownMenu}>
						<Button type="outline">
							<Space>
								Export
								<BsDownload />
							</Space>
						</Button>
					</Dropdown>
				</div>
			</div>
			<div className={styles.roadmapContainer}>
				<GanttComponent ref={ganttInstance} collapsing={(args) => collapsing(args)} highlightWeekends={true} allowSelection={true} editSettings={editSettings} dataSource={GanttData} height="450px" splitterSettings={splitterSettings} taskFields={taskFields} queryCellInfo={(args) => customizeCell(args)}>
				{/* queryCellInfo={(args) => customizeCell(args) */}
				<Inject services={[Selection, DayMarkers, Edit]}/>
				<ColumnsDirective>
					<ColumnDirective field='TaskName' width='250'></ColumnDirective>
					<ColumnDirective template={args => customProg(args.Progress)} field='Progress'></ColumnDirective>
					{/* <ColumnDirective template={(args) => } field='AS'></ColumnDirective> */}
					<ColumnDirective field='Duration'></ColumnDirective>
					<ColumnDirective field='StartDate' width='100'></ColumnDirective>
          		</ColumnsDirective>
				</GanttComponent>
			</div>
		</div>
    );
}

export default RoadmapBoard;
