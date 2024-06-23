import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './UserProfileContent.module.css'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MenuListProperty } from '../../../utils/interfaces/User/ListProperty';
import Profile from './Profile/Profile';
import UserPayment from './Payment/UserPayment';
import UserSchedule from './Schedule/UserSchedule';
import UserAccount from './Account/UserAccount';


const default_config: MenuListProperty = {
    links: [
        {
            linkName: "Hồ sơ",
            linkValue: "",
        },
        {
            linkName: "Thanh toán",
            linkValue: "",
        },
        {
            linkName: "Lịch khám",
            linkValue: "",
        },
        {
            linkName: "Tài khoản",
            linkValue: "",
        },
    ],
    active: 0,
}


const UserProfileContent = () => {
    const navigator = useNavigate();


    type AvatarState = {
        file: File | null;
        url: string;
    };
    const [avatar, setAvatar] = useState<AvatarState>({
        file: null,
        url: ""
    });



    const [activeIndex, setActiveIndex] = useState<number | null>(default_config.active);

    const handleNavigation = (index: number) => {
        setActiveIndex(index);
    };


    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <Profile />;
            case 1:
                return <UserPayment />;
            case 2:
                return <UserSchedule />;
            case 3:
                return <UserAccount />;
            default:
                return <Profile />;
        }
    };

    return (
        <Box className={styles.container}>
            <div className={styles.mainContentLeftContainer}>
                <ul>
                    {default_config.links.map((link, index) => (
                        <li
                            key={index}
                            className={`${styles.profileNavLink} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => handleNavigation(index)}
                        >
                            <p className={styles.profileNavText}>{link.linkName}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {renderContent()}
        </Box>
    )
}

export default UserProfileContent