import React, { useState } from 'react';
import RoadmapBoard from '../assets/components/roadmap/roadmapBoard';
import RoadmapHeader from '../assets/components/roadmap/roadmapHeader';
import styles from '../assets/scss/design.module.scss';

function Roadmap() {

    return (
        <div className={styles.kanban_container}>
            <RoadmapHeader/>
            <div className={styles.kanbanBody}>
                <RoadmapBoard/>
            </div>
        </div>
    )
}

export default Roadmap;