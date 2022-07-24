import { Button, Input, Table, Select, Checkbox, Form, Row, Col } from 'antd';
import cx from 'classnames';
import React, { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import CustomTextArea from '../assets/components/common/CustomTextArea';
import CustomModal from '../assets/components/common/Modal';
import TooltiipPJ from '../assets/components/common/Tooltip';
import UploadArea from '../assets/components/common/UploadArea';
import FeatureHeader from '../assets/components/features/featureHeader';
import styles from '../assets/scss/design.module.scss';

function Features() {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [addFeatureVisible, setAddFeatureVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const children = [];
  const [frameworks, setFrameworks] = useState([    
    {id: 0, name: 'Effort', desc: 'Lorem ipsum por amit', selected: false},
    {id: 1, name: 'Value', desc: 'Lorem ipsum por amit', selected: false},
    {id: 2, name: 'RICE', desc: 'Lorem ipsum por amit', selected: false},
    {id: 3, name: 'Value-Effort', desc: 'Lorem ipsum por amit', selected: false}]
  );
  const { Option } = Select;
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
      key: '1',
      feature: 'Metadata mapping of L2 categories on catalogue page',
      name: 'Mike',
      page: 'Home page',
      type: 'Bug',
      score: 32,
      description: '10 Downing Street 10 Downing Street 10 Downing Street 10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      description: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
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
      width: 100,
    },
    {
      title: 'Confidence',
      dataIndex: 'address',
      key: 'address',
      width: 100,
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
      width: 100,
    },
    {
      title: 'Reported by',
      dataIndex: 'address',
      key: 'address',
      width: 250,
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

  const addFeatureModal = () => {
    return (
      <CustomModal width={'50vw'} visible={addFeatureVisible} title="Create request" setVisible={setAddFeatureVisible}>
        <div className={styles.requestFormflex}>
          <Form layout='vertical' initialValues={{ remember: true }} autoComplete="off">
            <Row gutter={[24, 0]}>
              <Col span={8}>
                <Form.Item label="Type" name="type">
                  <Select defaultValue="feature" onChange={handleChange} style={{width: '100%'}}>
                    <Option value="feature">Feature</Option>
                    <Option value="bug">Bug</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Module/Page" name="type">
                  <Select defaultValue="feature" onChange={handleChange} style={{width: '100%'}}>
                    <Option value="feature">Feature</Option>
                    <Option value="bug">Bug</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Tags" name="type">
                  <Select mode="multiple" placeholder="Select tags" allowClear onChange={handleChange} style={{width: '100%'}}>
                    {children}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Summary" name="summary" valuePropName="checked">
              <Input placeholder="Feature summary" />
            </Form.Item>
            <Form.Item label="Description" name="description" valuePropName="checked">
              <CustomTextArea/>
            </Form.Item>
            <Row gutter={[24, 0]}>
              <Col span={24}>
                <Form.Item label="Attachments" name="attachments">
                  <UploadArea/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className={styles.flexApart}>
            <span className={styles.dangerButton}>Cancel</span>
            <span className={cx(styles.displayFlex, styles.columnGap_14)}>
              <Checkbox onChange={onChange}>Create another request</Checkbox>
              <Button type="primary" onClick={() => setAddFeatureVisible(true)}><IoMdAdd/>Add new</Button>
            </span>
          </div>
        </div>
      </CustomModal> 
    )
  };

    return (
        <div className={styles.featureContainer}>
            {addFeatureModal()}
            <FeatureHeader/>
            <div className={styles.right_content_container}>
                <div className={styles.featureSubHeader}>
                    <Input className={styles.searchInput} size="large" placeholder="Search feature requests" prefix={<HiOutlineSearch />} />
                    <div className={styles.actionRow}>
                        <Button type="primary" onClick={() => setAddFeatureVisible(true)}><IoMdAdd/>Add new</Button>
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
                    scroll={{ y: 240, x: 1450 }}
                    tableLayout="-"
                    bordered
                  />
                </div>
            </div>
        </div>
    )
}

export default Features;