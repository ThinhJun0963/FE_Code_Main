import React, { useEffect, useState } from 'react';
import { Avatar, Box, Breadcrumbs, Button, Divider, Link, Typography } from '@mui/material';
import ImageList from './ImageList/ImageList';
import ClinicServices from './ClinicServices/ClinicServices';
import { clinicData } from '../../../utils/mockData';
import { Clinic } from '../../../utils/interfaces/interfaces';
import { useParams } from 'react-router-dom';
import styles from './ClinicDetailContent.module.css'

import { fetchClinicImages } from '../../../utils/UploadFireBase';


const ClinicDetailContent = () => {
    const { id } = useParams<{ id: string }>();
    const [images, setImages] = useState<string[]>([]);
    const [logo, setLogo] = useState<string>(''); // [1
    const clinicId = id;
    const clinic: Clinic | undefined = clinicId ? clinicData.find(c => c.clinic_id === parseInt(clinicId)) : undefined;

    if (!clinic) {
        return (
            <Typography variant="h4" sx={{ paddingTop: '5em', paddingBottom: '5em' }}>
                Phòng khám không tồn tại
            </Typography>
        );
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // if (!clinicId) return; 

        const fetchImages = async (folderName: string) => {
            const folderPath = `clinics/${clinicId}/${folderName}/`;
            try {
                const imageUrls = await fetchClinicImages(folderPath);
                if (folderName === 'carousel') {
                    setImages(imageUrls);
                } else if (folderName === 'logo') {

                    setLogo(imageUrls[0]);
                }
            } catch (error) {
                console.error(`Error fetching images from ${folderName}:`, error);
            }
        };

        fetchImages('carousel');
        fetchImages('logo');
    }, [clinicId]);


    const logoSrc = clinic.logo || '../../../../public/placeholder.png';

    return (
        <Box className={styles.container}>
            <Box className={styles.breadcrumbs}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">
                        Trang chủ
                    </Link>
                    <Typography color="text.primary">Trang phòng khám</Typography>
                </Breadcrumbs>
            </Box>

            <Divider className={styles.divider} />

            <Box className={styles.clinicHeader}>
                <div className={styles.avatar}>
                    <img
                        src={logo}
                        alt={`${clinic.name} Logo`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <Typography variant="h4" component="div" gutterBottom className={styles.clinicName}>
                    {clinic.name}
                </Typography>
            </Box>

            <Divider className={styles.divider} />

            <Box className={styles.imageList}>
                <ImageList images={images} />
            </Box>
            <Box className={styles.imageList} style={{ textAlign: 'right' }}>
                <Button variant="contained" href={`/booking/${clinicId}`} className={styles.button}>Đặt lịch ngay</Button>
            </Box>

            <Box className={styles.detailSection}>
                <Box className={styles.sectionContent}>
                    <Typography variant="h4" className={styles.sectionTitle}>Giới thiệu chi tiết</Typography>
                    <Typography variant="body1" className={styles.sectionContent}>
                        {clinic.description}
                    </Typography>
                </Box>
                <Box className={styles.sectionContent}>
                    <Typography variant="h6" className={styles.sectionTitle}>Thời gian khám:</Typography>
                    <Typography variant="body1" className={styles.sectionContent}>
                        {clinic.open_hour} - {clinic.close_hour} tất cả các ngày trong tuần
                    </Typography>
                </Box>

                <Box className={styles.sectionContent}>
                    <Typography variant="h6" className={styles.sectionTitle}>Địa chỉ:</Typography>
                    <Typography variant="body1" className={styles.sectionContent}>
                        {clinic.address}
                    </Typography>
                </Box>

                <Box className={styles.sectionBottom}>
                    <Typography variant="h6" className={styles.sectionTitle}>Dịch vụ nổi bật:</Typography>
                    <ClinicServices services={clinic.services} />
                </Box>
            </Box>
        </Box>
    )
}

export default ClinicDetailContent;
