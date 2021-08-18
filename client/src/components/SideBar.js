import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
const SideBar = () => {
    const [state, setState] = useState({
        collapsed: false,
        width : 256 , 
    })

    const togglCollapsed = () => {
        setState({
            collapsed: !state.collapsed,
            width : state.width == 256 ? 80 : 256
        });
    };
    return <div style={{ width: state.width ,height : '100%'}}>
        <Button type="primary" onClick={togglCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={state.collapsed}
        >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
                Option 3
            </Menu.Item>
        </Menu>
    </div>
}
export default SideBar;