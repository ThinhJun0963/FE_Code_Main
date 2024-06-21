import React from 'react';
import { UsersToDisplay } from '../../../../utils/api/SystemAdminUtils';

interface UserListProps {
    users: UsersToDisplay[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.username} - {user.email} - {user.role}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
