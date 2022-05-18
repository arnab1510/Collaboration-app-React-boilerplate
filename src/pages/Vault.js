import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import VaultRow from '../assets/components/vault/vaultRow';

function Vault() {

    const favItems = [
        {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/370', url:''},
        {id: 1, type: 'doc', name: 'PRD req', poster: 'https://picsum.photos/380', url:''},
        {id: 1, type: 'folder', name: 'Design curriculum', poster: 'https://picsum.photos/390', url:''},
        {id: 1, type: 'doc', name: 'PRD requirements', poster: 'https://picsum.photos/400', url:''},
        {id: 1, type: 'folder', name: 'PRD requirements', poster: 'https://picsum.photos/410', url:''},
    ];
            
    return (
        <div className={styles.right_content_container}>
            <div><VaultRow items={favItems} title={"Favourites"}/></div>
            <div className={styles.mt_60}><VaultRow items={favItems} title={"Recent"}/></div>
        </div>
    )
}

export default Vault;