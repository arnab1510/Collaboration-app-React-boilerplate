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
  const [frameworks, setFrameworks] = useState([    
    {id: 0, name: 'Effort', desc: 'Lorem ipsum por amit', selected: false},
    {id: 1, name: 'Value', desc: 'Lorem ipsum por amit', selected: false},
    {id: 2, name: 'RICE', desc: 'Lorem ipsum por amit', selected: false},
    {id: 3, name: 'Value-Effort', desc: 'Lorem ipsum por amit', selected: false}]
  );

  const start = () => {
    setLoading(true);

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
      feature: 'Metadata mapping of L2 categories on catalogue page',
      name: 'Mike',
      page: 'Home page',
      type: 'Bug',
      score: 32,
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
      width: 70,
      fixed: 'left',
      render: text => <a>{text}</a>
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
      dataIndex: 'type',
      key: 'type',
      width: 100,
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      width: 80,
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
      title: 'Reported by',
      dataIndex: 'address',
      key: 'address',
      width: 160,
    }
  ];

  const selectPriority = (index) => {
    let newArr = [...frameworks];
    newArr[index].selected = !newArr[index].selected;
    for (var i=0; i<=frameworks.length-1; i++) {
      if (i!==index) {
        newArr[i].selected = false;
      }
    }
    setFrameworks(newArr);
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
                    {frameworks.length!==0 ? frameworks.map((item,index) => {
                      return (
                        <TooltiipPJ title={item.desc}>
                          <span onClick={() => selectPriority(index)} className={cx(styles.frameworkTag, item.selected?styles.selected:null)} key={index}>{item.name}</span>
                        </TooltiipPJ>
                      )
                    }) : null}
                  </span>
                </div>
                <div className={cx('featureTable')}>
                  <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    size={"middle"}
                    dataSource={dataSource}
                    pagination={{ pageSize: 50 }}
                    scroll={{ y: 240, x: 1400 }}
                    tableLayout="-"
                    bordered
                  />
                </div>
            </div>
        </div>
    )
}

export default Features;