import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import ChatHeader from '../assets/components/chat/chatHeader';
import ChatTypeSection from '../assets/components/chat/chatTypeSection';
import WallHeader from '../assets/components/wall/wallHeader';
import NewPost from '../assets/components/wall/newPost';
import PostCard from '../assets/components/wall/postCards/postCard';

function Wall() {

    const postItems = [
        {id: 12, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", attachment: null, image: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, image: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, image: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, image: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, image: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, image: null},
    ];
            
    return (
        <div className={styles.kanban_container}>
            <WallHeader/>
            <div className={cx(styles.right_content_container, styles.wall_container)}>
                <div className={styles.wall_left_container}>
                    <NewPost/>
                    {postItems.map((post, index) => {
                        return (
                            <PostCard post={post} index={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Wall;