import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  const user = UsersToDisplay.find((user: { id: string | undefined; }) => user.id === id);

  return (
    <div>
      <h1>User Detail</h1>
      <UserProfileTable user={user} />
    </div>
  )
}

export default UserDetail