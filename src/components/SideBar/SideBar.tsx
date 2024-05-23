import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const SideBar = () => {
    const SideBarData = [
        { title: "Dashboard", link: "/admin/dashboard" },
        { title: "Users", link: "/admin/users" },
        { title: "Clinic", link: "/admin/clinic" },
    ]

    return (
        <Sidebar className='sidebar'>
            <Menu className='sidebar-menu'>
                <SubMenu label="Quản lí thông tin">
                    <SubMenu label="Người dùng">
                    </SubMenu>
                    <SubMenu label="Phòng khám">
                        <MenuItem> Danh sách phòng khám </MenuItem>
                        <MenuItem> Thêm phòng khám </MenuItem>
                    </SubMenu>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SideBar