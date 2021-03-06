import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {DesktopOutlined, FileOutlined, TeamOutlined, UserOutlined,} from '@ant-design/icons';
import Logo from "../Logo";
import {Link} from "react-router-dom";

const {Sider} = Layout;
const {SubMenu} = Menu;

class Navigation extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <Logo/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="2">
                        <Link to="/">
                            <DesktopOutlined/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                  <UserOutlined/>
                  <span>User</span>
                </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                  <TeamOutlined/>
                  <span>Team</span>
                </span>
                        }
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <FileOutlined/>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/users">
                            <UserOutlined/>
                            <span>用户列表</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Navigation;