import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import ChatHeader from '../assets/components/chat/chatHeader';
import ChatTypeSection from '../assets/components/chat/chatTypeSection';
import WallHeader from '../assets/components/wall/wallHeader';
import NewPost from '../assets/components/wall/newPost';
import ImageCard from '../assets/components/wall/postCards/imageCard';

function Wall() {
            
    return (
        <div>
            <WallHeader/>
            <div className={cx(styles.right_content_container, styles.wall_container)}>
                <div className={styles.wall_left_container}>
                    <NewPost/>
                    <ImageCard/>
                </div>
            </div>
        </div>
    )
}

export default Wall;