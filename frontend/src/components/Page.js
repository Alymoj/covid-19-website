import React from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import Logo from "../imgs/logo19.png";
import {
    DesktopOutlined,
    PieChartOutlined,
    BarChartOutlined,
    TwitterOutlined,
    ReadOutlined,
    CloudOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import '../styles/Page.css';
const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class Page extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className={this.state.collapsed ? "logo-container collapsed" : "logo-container"}>
                        <img className="logo-wrapper" src={Logo} />
                    </div>
                    <div className="menu-wrapper">
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <PieChartOutlined/>
                                <span>Dashboard</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                      <BarChartOutlined/>
                                      <span>Data Analysis</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="2">
                                    <span>
                                      <ReadOutlined/>
                                      <span>News Analysis</span>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <span>
                                      <CloudOutlined/>
                                      <span>Weather Analysis</span>
                                    </span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <span>
                                      <TwitterOutlined/>
                                      <span>Twitter Analysis</span>
                                    </span>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="5">
                                <DesktopOutlined/>
                                <span>Get Data</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{margin: '0 16px'}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Page;