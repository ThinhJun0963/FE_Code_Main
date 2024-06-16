import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import clinicsData from './data' // import the clinics data
import { Box, Pagination, Divider, Typography, Paper, TextField, IconButton } from '@mui/material';
import { SearchIcon } from '@chakra-ui/icons';

const clinicPerPage = 7;

interface clinicsToDisplay  {
    image: string;
    title: string;
    description: string;
};

const clinicsToDisplay  = clinicsData.map(clinic => ({
    image: clinic.image,
    title: clinic.title,
    description: clinic.description
}))

const PaginatedClinicList = () => {

    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTermParams = queryParams.get('search');

    useEffect(() => {
        setSearchTerm(searchTermParams || '');
    }, [searchTermParams]);

    useEffect(() => {
        const filteredClinics = clinicsData.filter(clinic =>
            clinic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setClinics(filteredClinics);
    }, [searchTerm, searchTermParams]);

    const [currentPage, setCurrentPage] = useState(1);

    const numberOfPages = Math.ceil(clinics.length / clinicPerPage);

    const clinicsToDisplay = clinics.slice((currentPage - 1) * clinicPerPage, currentPage * clinicPerPage);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, paddingTop: '8em', paddingBottom: '5em' }}>
            <Paper sx={{ width: '60%', margin: '0 auto', display: 'flex', position: 'relative' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={searchTerm}
                    placeholder='Tìm kiếm theo tên, địa chỉ phòng khám'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ margin: '0 auto' }}
                />
                <IconButton
                    type="submit"
                    aria-label="search"
                    sx={{ color: "#000", position: 'absolute', right: '15px', top: '0', bottom: '0', margin: 'auto' }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>

            <Paper sx={{ width: '60%', margin: '20px auto 0 auto', padding: '3em', borderRadius: '1em' }}>
                <Box sx={{ width: '100%', margin: '20px auto 0 auto' }}>
                    {clinicsToDisplay.map((clinic, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', margin: '15px 0 15px 0' }}>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <img src={clinic.image} alt={clinic.title} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />

                                <Box>
                                    <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>{clinic.title}</Typography>
                                    <Typography variant="body1" component="div" gutterBottom sx={{ textAlign: 'left' }}>Địa chỉ : {clinic.description}</Typography>
                                </Box>
                            </Box>

                            {index !== clinicsToDisplay.length - 1 && <Divider sx={{ backgroundColor: 'black', width: '90%', margin: '1em auto' }} />}
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