import React from 'react'
import UserLayout from '../../components/UserLayout'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ClinicDetailContent from './components/ClinicDetailContent'

const ClinicDetail = () => {
    return (
        <UserLayout>
                <ClinicDetailContent/>
        </UserLayout>
    )
}

export default ClinicDetail