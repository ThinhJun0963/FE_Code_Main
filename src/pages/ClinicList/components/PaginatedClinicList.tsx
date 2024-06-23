import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { clinicData } from '../../../utils/mockData'
import { Clinic } from '../../../utils/interfaces/interfaces'
import { Box, Pagination, Divider, Typography, Paper, TextField, IconButton } from '@mui/material';
import { SearchIcon } from '@chakra-ui/icons';
import styles from './PaginatedClinicList.module.css';

const clinicPerPage = 7;

interface clinicService {
    serviceId: string;
    serviceName: string;
}

interface clinicsToDisplay {
    id: number;
    image: string;
    title: string;
    address: string;
    services: clinicService[]
};

const PaginatedClinicList = () => {

    const [clinics, setClinics] = useState<clinicsToDisplay[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTermParams = queryParams.get('search');

    const clinicsList = clinicData.map(clinic => ({
        id: clinic.clinic_id,
        image: clinic.imageToShow,
        title: clinic.name,
        address: clinic.address,
        services: clinic.services
    }))

    useEffect(() => {
        setClinics(clinicsList);
    }, []);

    useEffect(() => {
        setSearchTerm(searchTermParams || '');
    }, [searchTermParams]);

    useEffect(() => {
        const filteredClinics = clinicsList.filter(clinic =>
            clinic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setClinics(filteredClinics);
    }, [searchTerm, searchTermParams]);

    const [currentPage, setCurrentPage] = useState(1);

    const numberOfPages = Math.ceil(clinicsList.length / clinicPerPage);

    const clinicsToDisplay = clinicsList.slice((currentPage - 1) * clinicPerPage, currentPage * clinicPerPage);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, paddingTop: '8em', paddingBottom: '5em' }}>
            <Paper sx={{ width: '65%', margin: '0 auto', display: 'flex', position: 'relative' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={searchTerm}
                    placeholder='Tìm kiếm theo tên, địa chỉ phòng khám'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ margin: '0 auto' }}
                    className={styles.searchBar}
                />
                <IconButton
                    type="submit"
                    aria-label="search"
                    sx={{ color: "#000", position: 'absolute', right: '15px', top: '0', bottom: '0', margin: 'auto' }}
                    className={styles.searchIconButton}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>

            <Paper sx={{ width: '65%', margin: '20px auto 0 auto', padding: '3em', borderRadius: '1em', border: '.25px solid black' }}>
                <Box sx={{ width: '100%', margin: '20px auto 0 auto' }}>
                    {clinicsToDisplay.map((clinic, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', margin: '15px 0 15px 0' }}>
                            <Box className={styles.clinicBox}>
                                <img src={clinic.image} alt={clinic.title} className={styles.clinicImage} />
                                <Box sx={{ flexGrow: 1, marginLeft: '5%' }}>
                                    <Link to={`/clinic/${clinic.id}`} className={styles.clinicTitle}>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            {clinic.title}
                                        </Typography>
                                    </Link>
                                    <Typography variant="body1" component="div" className={styles.clinicAddress} gutterBottom>
                                        Địa chỉ: {clinic.address}
                                    </Typography>
                                </Box>
                            </Box>
                            {index !== clinicsToDisplay.length - 1 && <Divider className={styles.clinicDivider} />}
                        </Box>
                    ))}
                </Box>
            </Paper>
            <Box sx={{ width: '80%', margin: '0 auto' }}>
                <Pagination
                    sx={{ width: 'auto', display: 'flex', justifyContent: 'center' }}
                    count={numberOfPages}
                    color="primary"
                    onChange={(event, page) => {
                        console.log(event)
                        console.log(page)
                        setCurrentPage(page)
                    }}
                />
            </Box>
        </Box>
    )
}

export default PaginatedClinicList