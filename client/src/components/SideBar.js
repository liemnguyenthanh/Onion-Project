import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';
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
        <Button type="primary" onClick={togglCollapsed} style={{ width: '100%' , height : '48px' }}>
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
                <Link to='/buy'>
                    Thu Hành
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to='/sale'>
                    Bán Hành
                </Link>
            </Menu.Item>
        </Menu>
    </div>
}
export default SideBar;