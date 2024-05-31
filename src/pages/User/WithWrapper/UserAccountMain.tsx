import React from 'react'
import UserLayout from '../../../components/UserLayout'
import UserAccount from '../Account/UserAccount'

const UserAccountMain: React.FC = () => {
    return (
        <UserLayout>
            <UserAccount />
        </UserLayout>
    )
}

export default UserAccountMain