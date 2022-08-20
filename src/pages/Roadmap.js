import React, { useState } from 'react';
import RoadmapBoard from '../assets/components/roadmap/roadmapBoard';
import initialData from '../assets/components/sprint/initialData';
import KanbanHeader from '../assets/components/sprint/kanbanHeader';
import styles from '../assets/scss/design.module.scss';

function Roadmap() {

    const [data, setData] = useState(initialData.columns);
    const [frameworks, setFrameworks] = useState([    
        {id: 0, name: 'Current Sprint', desc: 'Lorem ipsum por amit', selected: true},
        {id: 1, name: 'My tasks', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Bugs only', desc: 'Lorem ipsum por amit', selected: false},
        {id: 2, name: 'Critical priority', desc: 'Lorem ipsum por amit', selected: false}]
    );

    return (
        <div className={styles.kanban_container}>
            <KanbanHeader/>
            <div className={styles.kanbanBody}>
                <RoadmapBoard/>
            </div>
        </div>
    )
}

export default Roadmap;