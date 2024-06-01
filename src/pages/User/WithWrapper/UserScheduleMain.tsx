import React from 'react'
import UserLayout from '../../../components/UserLayout'
import UserSchedule from '../Schedule/UserSchedule'

const UserScheduleMain: React.FC = () => {
    return (
        <UserLayout>
            <UserSchedule />
        </UserLayout>
    )
}

export default UserScheduleMain