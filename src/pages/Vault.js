import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';

function Vault() {
            
    return (
        <div className={styles.right_content_container}>
            Vault
        </div>
    )
}

export default Vault;