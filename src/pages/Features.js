import React, {  useState, useEffect, useRef, memo, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import { Input } from 'antd';
import { Button } from 'antd';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import FeatureHeader from '../assets/components/features/featureHeader';
import { Table } from "antd";
import TooltiipPJ from '../assets/components/common/Tooltip';

function Features() {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const dataSource = [
    {
      id: '1',
      name: 'Mike',
      age: 32,
      description: '10 Downing Street 10 Downing Street 10 Downing Street 10 Downing Street',
    },
    {
      id: '2',
      name: 'John',
      age: 42,
      description: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
      width: 300,
      fixed: 'left',
    },
    {
      title: 'Page',
      dataIndex: 'page',
      key: 'page',
      width: 200,
    },
    {
      title: 'Type',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Score',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Reach',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Importance',
      dataIndex: 'Name',
      key: 'name',
      width: 120,
    },
    {
      title: 'Confidence',
      dataIndex: 'address',
      key: 'address',
      width: 120,
    },
    {
      title: 'Effort',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Status',
      dataIndex: 'Name',
      key: 'name',
    },
    {
      title: 'Reportd by',
      dataIndex: 'address',
      key: 'address',
    }
  ];

  const frameworkArray = [
    {name: 'Effort', desc: 'Lorem ipsum por amit', selected: true},
    {name: 'Value', desc: 'Lorem ipsum por amit', selected: false},
    {name: 'RICE', desc: 'Lorem ipsum por amit', selected: false},
    {name: 'Value-Effort', desc: 'Lorem ipsum por amit', selected: false}
  ];

  const selectPriority = (index) => {
    
  };
    
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
                <div className={styles.frameworkRow}>
                  <span>Prioritize by</span>
                  <span className={styles.frameworkTagRow}>
                    {frameworkArray.map((item,index) => {
                      return (
                        <TooltiipPJ title={item.desc}>
                          <span onClick={() => selectPriority(index)} className={cx(styles.frameworkTag, item.selected?styles.selected:null)} key={index}>{item.name}</span>
                        </TooltiipPJ>
                      )
                    })}
                  </span>
                </div>
                <div className={cx('featureTable')}>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{ pageSize: 50 }}
                    scroll={{ y: 240, x: 1600 }}
                    tableLayout="-"
                    bordered
                  />
                </div>
            </div>
        </div>
    )
}

export default Features;