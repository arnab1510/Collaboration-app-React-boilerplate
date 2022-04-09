import { Route, Navigate } from 'react-router-dom';
import { AppStorageKeys, AppLocalStorage } from '../contracts';
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import styles from '../assets/scss/design.module.scss';
import {
    CopyOutlined,
    FolderOpenOutlined,
    SoundOutlined,
    VideoCameraOutlined,
    UserOutlined,
    FormOutlined
} from '@ant-design/icons';

function PrivateRoute(props) {
    const history = useNavigate();
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);
    const isAuthenticated = AppLocalStorage.get(AppStorageKeys.isLoggedIn, true);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    const { component: Component, ...rest } = props

    const change = (link) => {
        history.push(link);
    };

    return (
        <Route
            {...rest}
            render={
                (props) => (
                    isAuthenticated === true
                        ?
                        <div>
                            <Layout>
                                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                                    collapsible collapsed={collapsed} onCollapse={onCollapse} >
                                    <div className={cx(styles.center_all)}>
                                        <Image preview={false} style={{ height: '30px', objectFit: 'contain', marginTop: '16px', marginBottom: '10px' }} src={'https://prodstack-assets.s3-ap-southeast-1.amazonaws.com/dev/app/misc/app-icon.png'} />
                                    </div>
                                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                        <Menu.Item key="1" onClick={() => change('/users/list')} icon={<UserOutlined />}>
                                            Users
                                        </Menu.Item>
                                        <Menu.Item key="2" onClick={() => change('/creator/list')} icon={<FormOutlined />}>
                                            Creators
                                        </Menu.Item>
                                        <Menu.Item key="3" onClick={() => change('/series/list')} icon={<VideoCameraOutlined />}>
                                            Videos
                                        </Menu.Item>
                                        <Menu.Item key="4" onClick={() => change('/podcast/list')} icon={<SoundOutlined />}>
                                            Podcasts
                                        </Menu.Item>
                                        <Menu.Item key="5" onClick={() => change('/podcast/list')} icon={<FolderOpenOutlined />}>
                                            Jobs
                                        </Menu.Item>
                                        <Menu.Item key="6" onClick={() => change('/blog/list')} icon={<CopyOutlined />}>
                                            Blogs
                                        </Menu.Item>
                                        <Menu.Item key="7" onClick={() => change('/organisation/list')} icon={<CopyOutlined />}>
                                            Organisation
                                        </Menu.Item>
                                    </Menu>
                                </Sider>
                                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                                        <div className={cx(styles.paddingMain)}>
                                            <Component {...props} />
                                        </div>
                                    </Content>
                                </Layout>
                            </Layout>
                        </div>
                        : <Navigate to="/auth" />
                )}
        />
    );
};

export default PrivateRoute;
