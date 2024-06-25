import React, { useState } from 'react';
import styles from './DentistList.module.css';
import { SetBookingInformation } from '../../../../utils/interfaces/interfaces';

interface DentistListProps {
    setFormData: SetBookingInformation;
    onStepComplete: () => void;
}

// src/utils/mockDentists.ts
const dentists = [
    { dentistId: '1', dentistName: 'Dr. John Doe', specialty: 'Orthodontist' },
    { dentistId: '2', dentistName: 'Dr. Jane Smith', specialty: 'Periodontist' },
    { dentistId: '3', dentistName: 'Dr. Emily Johnson', specialty: 'Endodontist' },
];


const DentistList = ({ setFormData, onStepComplete }: DentistListProps) => {
    const handleDentistClick = (dentistId: string) => {
        setFormData(prevState => ({
            ...prevState,
            dentist: dentistId,
            dentistName: dentists.find(dentist => dentist.dentistId === dentistId)?.dentistName || '',
        }));
        onStepComplete();
    };

    return (
        <div className={styles.container}>
            <div className={styles.headingBox}>
                <div className={styles.heading}>Chọn Nha Sĩ</div>
            </div>
            <div className={styles.contentBox}>
                {/* <div className={styles.toolbar}>
                    <div className={styles.searchbar}>
                        <input type="text" placeholder="Tìm kiếm nha sĩ" className={styles.searchInput} />
                    </div>
                </div> */}
                <div className={styles.list}>
                    {dentists.map((dentist) => (
                        <div key={dentist.dentistId} className={styles.item} onClick={() => handleDentistClick(dentist.dentistId)}>
                            <div className={styles.dentistName}>{dentist.dentistName}</div>
                            <div className={styles.specialty}>{dentist.specialty}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DentistList;
