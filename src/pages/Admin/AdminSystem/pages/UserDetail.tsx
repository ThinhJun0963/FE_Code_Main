import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();


  return (
    <div>
      <h1>User Detail</h1>
    </div>
  )
}

export default UserDetail