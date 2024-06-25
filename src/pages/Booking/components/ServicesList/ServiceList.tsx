import React, { useState } from 'react'
import { clinicServices } from '../../../../utils/mockData'
import styles from './ServiceList.module.css'
import {SetBookingInformation } from '../../../../utils/interfaces/interfaces';

interface ServiceListProps  {
    setFormData: SetBookingInformation,    
    onStepComplete: () => void,
}

const ServiceList = ({ setFormData, onStepComplete} : ServiceListProps) => {

    const handleServiceClick = (serviceId: string) => { 
        setFormData(prevState => ({ ...prevState, service: serviceId, serviceName: clinicServices.find(service => service.serviceId === serviceId)?.serviceName || ''}));
        onStepComplete();
    }

    return (
        <div className={styles.container}>
            <div className={styles.headingBox}>
                <div className={styles.heading}>Chọn dịch vụ khám</div>
            </div>
            <div className={styles.contentBox}>
                <div className={styles.toolbar}>
                    <div className={styles.searchbar}>
                        <input type="text" placeholder="Tìm kiếm dịch vụ"
                            className={styles.searchInput}
                        />
                    </div>
                </div>
                <div className={styles.list}>
                    {clinicServices.map((service) => (
                        <div key={service.serviceId} className={styles.item} onClick={() => handleServiceClick(service.serviceId)}>
                            {service.serviceName}
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default ServiceList