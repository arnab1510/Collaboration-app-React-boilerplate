import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import Sidebar from '../assets/components/sidebar';
import ChatHeader from '../assets/components/chat/chatHeader';
import ChatTypeSection from '../assets/components/chat/chatTypeSection';

function Home() {
            
    return (
        <div style={{overflow: "hidden"}}>
            <ChatHeader/>
            <div>
                <div className={styles.chatContent}>
                    <div>sdfsdfnkjnkjbkj</div>
                    <div> sfsd</div>
                </div>
                <ChatTypeSection/>
            </div>
        </div>
    )
}

export default Home;