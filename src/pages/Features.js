import React, {  useState, useEffect, useRef, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import { Input } from 'antd';
import { Button } from 'antd';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import FeatureHeader from '../assets/components/features/featureHeader';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

function Features() {
    
    return (
        <div>
            <FeatureHeader/>
            <div className={styles.right_content_container}>
                <div className={styles.featureSubHeader}>
                    <Input className={styles.searchInput} size="large" placeholder="Search feature requests" prefix={<HiOutlineSearch />} />
                    <div className={styles.actionRow}>
                        <Button type="primary"><IoMdAdd/>Add new</Button>
                        <Button><BsDownload/>Export</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;