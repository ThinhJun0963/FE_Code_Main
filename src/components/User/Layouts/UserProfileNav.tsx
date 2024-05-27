import React from 'react'
import { GenericLink, MenuListProperty } from './ListProperty'
import style from './UserProfileNav.module.scss'
import { useNavigate } from 'react-router-dom'

const default_config: MenuListProperty = {
    links: [
        {
            linkName: "Item 1",
            linkValue: "#",
        }, 
        {
            linkName: "Item 2",
            linkValue: "#",
        }, 
        {
            linkName: "Item 3",
            linkValue: "#",
        }, 
        {
            linkName: "Item 4",
            linkValue: "#",
        }, 
        {
            linkName: "Item 5",
            linkValue: "#",
        }, 
    ],
    active: 1,

}

const UserProfileNav: React.FC<MenuListProperty> = (props: MenuListProperty) => {

    let menuItems: Array<GenericLink>;

    if (props.links === undefined || props.links.length == 0) {
        menuItems = default_config.links;
    }
    else {
        menuItems = props.links
    }

    const navigator = useNavigate();

    const items = menuItems.map((item: GenericLink, i: number) => {
        return <li key={i} className={`${i == props.active - 1 ? style.active : ''}`}><p onClick={() => {navigator(item.linkValue)}}>{item.linkName}</p></li>
    })

    return (
        <ul className={style.UserProfileMenu}>
            {items}
        </ul>
    )
}

export default UserProfileNav;