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
      
      const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key: 'id',
            render: text => <a>{text}</a>,
            fixed: 'left',
            width: 70
        },
        {
          title: 'Feature Description',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
          fixed: 'left',
          width: 300
        },
        {
          title: 'Reported by',
          dataIndex: 'name',
          key: 'name',
          width: 200
        },
        {
          title: 'Status',
          dataIndex: 'address',
          key: 'address',
          width: 150
        },
        {
          title: 'Labels',
          key: 'tags',
          dataIndex: 'tags',
          width: 250,
          render: (_, { tags }) => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
            title: 'Reach',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Impact',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Confidence',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Effort',
            dataIndex: 'address',
            key: 'address',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
      
    
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
                <div className={cx(styles.tableContainer, 'featureTable')}>
                    <Table columns={columns} dataSource={data} scroll={{  x: 1500}} sticky/>
                </div>
            </div>
        </div>
    )
}

export default Features;