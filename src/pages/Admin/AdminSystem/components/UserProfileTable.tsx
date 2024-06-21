import React from 'react'
import styles from './UserProfileTable.module.css'
import { UsersToDisplay } from '../../../../utils/api/SystemAdminUtils'

const UserProfileTable = () => {


    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.profileColumn}>
                    <div>
                        User Profile
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserProfileTable