import React from 'react'
import UserLayout from '../../components/UserLayout'
import PaginatedClinicList from './components/PaginatedClinicList'

const ClinicList = () => {
  return (
    <UserLayout>
      <PaginatedClinicList />
    </UserLayout>
  )
}

export default ClinicList

